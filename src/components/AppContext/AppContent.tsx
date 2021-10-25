import React from "react";
import { Route, Router, Switch } from "react-router";
import BookInfo from "../BookInfo/BookInfo";
import BookList from "../BookList/BookList";
import "./AppContent.css";

interface Props {}

const AppContent = (props: Props) => {
  return (
    <div className="AppContent">
      <Switch>
        <Route path="/info">
          <BookInfo />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </div>
  );
};

export default AppContent;
