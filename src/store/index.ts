import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bookReducer } from "./booksReducer";

const rootReducer = combineReducers({
  books: bookReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch