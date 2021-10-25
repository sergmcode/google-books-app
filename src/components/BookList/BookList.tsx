import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { fetchMoreBooksAPI } from "../../store/booksActionCreators";
import { EBookActionTypes } from "../../store/booksTypes";
import { useTypedSelector } from "../../store/hooks";
import BookThumb from "../BookThumb/BookThumb";
import "./BookList.css";

interface Props {}

const BookList = (props: Props) => {
  const totalNumberOfItems = useTypedSelector(
    (state) => state.books.numOfItems
  );
  const dispatch = useDispatch();
  const scrollPosition = useTypedSelector(
    (state) => state.books.scrollPosition
  );

  const [hasMore, setHasMore] = useState(true);

  const appState = useTypedSelector((state) => state);

  const fetchMoreData = () => {
    console.log("books.length: ", appState.books.books.length, "numOfItems: ", appState.books.numOfItems)
    if (appState.books.books.length >= appState.books.numOfItems) {
      setHasMore(false);
    } else {
      setHasMore(true);
      dispatch(fetchMoreBooksAPI(appState.books.books.length.toString()));
    }
  };

  const onThumbClick = () => {
    dispatch({
      type: EBookActionTypes.SET_SCROLL_POSITION,
      payload: window.scrollY,
    });
  };

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, []);

  return (
    <div
      className={appState.app.darkTheme ? "BookList dark" : "BookList"}
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "wrap",
      }}
      onClick={onThumbClick}
    >
      <div className="BookList__totalNumber">
        {totalNumberOfItems > 0 && (
          <div>Total number of books found: {totalNumberOfItems}</div>
        )}
      </div>
      <InfiniteScroll
        dataLength={appState.books.books.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<div></div>}
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
        }}
      >
        {appState.books.books.map((book, index) => {
          return (
            <BookThumb
              id={book.id}
              img={book.img}
              categories={book.categories}
              title={book.title}
              authors={book.authors}
              key={index}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default BookList;
