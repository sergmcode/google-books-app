export interface IBook {
  id: string;
  title: string;
  authors: string[];
  description: string;
  img: string;
  categories: string[];
}

export interface IBookState {
  books: IBook[];
  loading: boolean;
  error: string;
  currentBookId: string;
}

export enum EBookActionTypes {
  SET_LOADING,
  SET_BOOKS,
  SET_CURRENT_BOOK_ID,
  SET_ERROR
}

