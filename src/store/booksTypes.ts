export interface IBook {
  id: string;
  title: string;
  authors: string[];
  description: string;
  img: string;
  categories: string[];
  infoLink: string;
}

export interface IBookState {
  books: IBook[];
  loading: boolean;
  error: string;
  currentBookId: string;
  query: string;
  startIndex: string; //
  maxResults: string; //
  orderBy: string;
  category: string;
  numOfItems: number;
  scrollPosition: number;
}

export enum EBookActionTypes {
  SET_LOADING,
  SET_BOOKS,
  SET_CURRENT_BOOK_ID,
  SET_ERROR,
  SET_QUERY,
  SET_ORDER_BY,
  SET_CATEGORY,
  SET_NUM_OF_ITEMS,
  SET_SCROLL_POSITION,
}

