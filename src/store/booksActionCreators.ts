import { TAppDispatch, TRootState } from ".";
import { EBookActionTypes, IBook } from "./booksTypes";

export const populateStoreWithTestDataThunk = () =>
  (dispatch: TAppDispatch, getStore: () => TRootState) => {
    const testBooks: IBook[] = [
      { id: "1111", title: 'Book1Title', authors: ["John", "Eric"], 
         description: "Some description", 
         img: "https://source.unsplash.com/user/c_v_r" ,
         categories: ["art", "science"]
      },
      { id: "1112", title: 'Book2Title', authors: ["Samantha", "Eric"], 
         description: "Some description", 
         img: "https://source.unsplash.com/user/c_v_r" ,
         categories: ["art"]
      },
      { id: "1113", title: 'Book3Title', authors: ["John Jeckson"], 
         description: "Some description", 
         img: "https://source.unsplash.com/user/c_v_r" ,
         categories: ["computers"]
      },
      { id: "1114", title: 'Book4Title', authors: ["Albert Johnson"], 
         description: "Some description", 
         img: "https://source.unsplash.com/user/c_v_r" ,
         categories: ["computers", "poetry"]
      },
      { id: "1115", title: 'Book5Title', authors: ["Nancy MacKenzy"], 
         description: "Some description", 
         img: "https://source.unsplash.com/user/c_v_r" ,
         categories: ["poetry", "cooking"]
      },
    ]
    dispatch({ type: EBookActionTypes.SET_BOOKS, payload: testBooks })
  }