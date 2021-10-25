import { EBookActionTypes, IBookState } from "./booksTypes";

const initialState: IBookState = {
  books: [],
  loading: false,
  error: "",
  currentBookId: "",
  query: "",
  startIndex: "0",
  maxResults: "40",
  orderBy: "relevance",
  category: "all",
  numOfItems: 0,
  scrollPosition: 0,
};

export const bookReducer = (
  state: IBookState = initialState,
  action: any
): IBookState => {
  switch (action.type) {
    case EBookActionTypes.SET_BOOKS:
      return { ...state, books: action.payload };
    case EBookActionTypes.SET_CURRENT_BOOK_ID:
      return { ...state, currentBookId: action.payload };
    case EBookActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case EBookActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case EBookActionTypes.SET_QUERY:
      return { ...state, query: action.payload };
    case EBookActionTypes.SET_ORDER_BY:
      return { ...state, orderBy: action.payload };
    case EBookActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case EBookActionTypes.SET_NUM_OF_ITEMS:
      return { ...state, numOfItems: action.payload };
    case EBookActionTypes.SET_SCROLL_POSITION:
      return { ...state, scrollPosition: action.payload };
    default:
      return state;
  }
};
