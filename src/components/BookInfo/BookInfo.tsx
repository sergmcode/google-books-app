import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { IBook } from "../../store/booksTypes";
import { useTypedSelector } from "../../store/hooks";
import "./BookInfo.css";

interface Props {}

const BookInfo = (props: Props) => {
  const appState = useTypedSelector((state) => state);
  const [currentBook, setCurrentBook] = useState<IBook>();

  useEffect(() => {
    setCurrentBook(
      appState.books.books.find(
        (book) => book.id === appState.books.currentBookId
      )
    );
  }, []);

  return (
    <div className="BookInfo">
      <div className="BookInfo__imageContainer">
        <img alt="img" src={currentBook?.img} />
      </div>
      <div className="BookInfo__text">
        <div className="BookInfo__textMoreBackButtons">
          <span>
            <Link to="/">Back</Link>{" "}
          </span>
          <span>
            <a href={currentBook?.infoLink}>More info</a>{" "}
          </span>
        </div>
        <div className="BookInfo__textCategories">
          {currentBook?.categories?.join("/")}
        </div>
        <div className="BookInfo__textTitle">{currentBook?.title}</div>
        {currentBook?.description && (
          <div className="BookInfo__textDescription">
            {currentBook?.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookInfo;
