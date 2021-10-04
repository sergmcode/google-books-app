import axios from "axios";
import { TAppDispatch, TRootState } from ".";
import { EBookActionTypes, IBook } from "./booksTypes";

export function fetchBooksAPI (q: string, subject: string, startIndex: string, maxResults: string, orderBy: string) {
   return (dispatch: TAppDispatch, getStore: () => TRootState) => {
      let query = q.split(" ").join("+");
      if(subject !== "all"){
         query += `+subject:${subject}`
      }
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}`;
      console.log(url);
      axios.get(url)
      .then((response: any) => {
         const books: IBook[] = [];
         if(response.data.items){
            console.log(response); //
            dispatch({ type: EBookActionTypes.SET_NUM_OF_ITEMS, payload: Number(response.data?.totalItems) })
            for(const item of response.data.items){
               books.push({
                  id: item.id,
                  title: item.volumeInfo?.title,
                  authors: item.volumeInfo?.authors,
                  categories: item.volumeInfo?.categories,
                  description: item.volumeInfo?.description,
                  img: item.volumeInfo?.imageLinks?.thumbnail
               })
            }
         }
         dispatch({ type: EBookActionTypes.SET_BOOKS, payload: books })
      })
   }
}

export function fetchMoreBooks (startIndex: string) {
   return (dispatch: TAppDispatch, getStore: () => TRootState) => {
      let query = getStore().books.query.split(" ").join("+");
      let subject = getStore().books.category;
      if(subject !== "all"){
         query += `+subject:${subject}`
      }
      let orderBy = getStore().books.orderBy;
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=40&orderBy=${orderBy}`;
      console.log('[ fetchMoreBooks url: ]', url);
      axios.get(url)
      .then((response: any) => {
         const books: IBook[] = [];
         if(response.data.items){
            for(const item of response.data.items){
               books.push({
                  id: item.id,
                  title: item.volumeInfo?.title,
                  authors: item.volumeInfo?.authors,
                  categories: item.volumeInfo?.categories,
                  description: item.volumeInfo?.description,
                  img: item.volumeInfo?.imageLinks?.thumbnail
               })
            }
         }
         dispatch({ type: EBookActionTypes.SET_BOOKS, payload: [ ...getStore().books.books, ...books ] })
      })
   }
}
   