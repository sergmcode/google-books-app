import { tuple } from "antd/lib/_util/type";
import axios from "axios";
import { TAppDispatch, TRootState } from ".";
import { EBookActionTypes, IBook } from "./booksTypes";

export function fetchBooksAPI() {
  return (dispatch: TAppDispatch, getStore: () => TRootState) => {
    let query = getStore().books.query.split(" ").join("+");
    let subject = getStore().books.category;
    if (subject !== "all") {
      query += `+subject:${subject}`;
    }
    let orderBy = getStore().books.orderBy;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${0}&maxResults=${40}&orderBy=${orderBy}`;
    dispatch({ type: EBookActionTypes.SET_LOADING, payload: true });
    axios.get(url).then((response: any) => {
      console.log(response);
      const books: IBook[] = [];
      if (response.data.items) {
        dispatch({
          type: EBookActionTypes.SET_NUM_OF_ITEMS,
          payload: Number(response.data?.totalItems),
        });
        for (const item of response.data.items) {
          books.push({
            id: item.id,
            title: item.volumeInfo?.title,
            authors: item.volumeInfo?.authors,
            categories: item.volumeInfo?.categories,
            description: item.volumeInfo?.description,
            img: item.volumeInfo?.imageLinks?.thumbnail,
            infoLink: item.volumeInfo?.infoLink,
          });
        }
      }
      dispatch({ type: EBookActionTypes.SET_BOOKS, payload: books });
      dispatch({ type: EBookActionTypes.SET_LOADING, payload: false });
    });
  };
}

export function fetchMoreBooksAPI(startIndex: string) {
  return (dispatch: TAppDispatch, getStore: () => TRootState) => {
    let query = getStore().books.query.split(" ").join("+");
    let subject = getStore().books.category;
    if (subject !== "all") {
      query += `+subject:${subject}`;
    }
    let orderBy = getStore().books.orderBy;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=40&orderBy=${orderBy}`;
    dispatch({ type: EBookActionTypes.SET_LOADING, payload: true });
    axios.get(url).then((response: any) => {
      const books: IBook[] = [];
      if (response.data.items) {
        for (const item of response.data.items) {
          books.push({
            id: item.id,
            title: item.volumeInfo?.title,
            authors: item.volumeInfo?.authors,
            categories: item.volumeInfo?.categories,
            description: item.volumeInfo?.description,
            img: item.volumeInfo?.imageLinks?.thumbnail,
            infoLink: item.volumeInfo?.infoLink,
          });
        }
      }
      dispatch({
        type: EBookActionTypes.SET_BOOKS,
        payload: [...getStore().books.books, ...books],
      });
      dispatch({ type: EBookActionTypes.SET_LOADING, payload: false });
    });
  };
}
