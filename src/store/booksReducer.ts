import { EBookActionTypes, IBookState } from "./booksTypes";

const initialState: IBookState = {
  books: [],
  loading: false,
  error: "",
  currentBookId: ""
}

export const bookReducer = (state: IBookState = initialState, action: any): IBookState => {
  switch(action.type){
    case EBookActionTypes.SET_BOOKS:
      return { ...state, books: action.payload }
    case EBookActionTypes.SET_CURRENT_BOOK_ID:
      return { ...state, currentBookId: action.payload }
    case EBookActionTypes.SET_ERROR:
      return { ...state, error: action.payload }
    case EBookActionTypes.SET_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}