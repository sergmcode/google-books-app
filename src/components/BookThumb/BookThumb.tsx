import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { EBookActionTypes } from "../../store/booksTypes";
import { useTypedSelector } from "../../store/hooks";
import "./BookThumb.css";

interface Props {
  id: string;
  img: string;
  categories: string[];
  title: string;
  authors: string[];
}

const BookThumb = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: EBookActionTypes.SET_CURRENT_BOOK_ID, payload: props.id });
    history.push("/info");
  };

  const appState = useTypedSelector(state => state)

  const authorsString = () => {
    let str = props.authors?.join(", ");
    if (str) {
      if (str.length > 18) {
        return str.slice(0, 18) + "...";
      } else {
        return str;
      }
    } else {
      return "";
    }
  };

  const categoriesString = () => {
    let str = props.categories?.join(", ");
    if (str) {
      if (str.length > 18) {
        return str.slice(0, 18) + "...";
      } else {
        return str;
      }
    } else {
      return "";
    }
  };

  return (
    <div className="BookThumb" onClick={onClick}>
      <Card
        title={props.title}
        hoverable
        style={{
          width: 250,
          height: 300,
          margin: 10,
          backgroundColor: "#eee",
        }}
      >
        <div
          style={{
            height: 150,
          }}
        >
          <img
            src={props.img}
            style={{
              maxWidth: 100,
              maxHeight: 120,
            }}
          />
        </div>
        <div>{authorsString()}</div>
        <div>{categoriesString()}</div>
      </Card>
    </div>
  );
};

export default BookThumb;
