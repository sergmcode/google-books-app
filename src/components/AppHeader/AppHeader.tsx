import { Button, Input, Select, Spin, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchBooksAPI } from "../../store/booksActionCreators";
import { EBookActionTypes } from "../../store/booksTypes";
import { useTypedSelector } from "../../store/hooks";
import "./AppHeader.css";

interface Props {}

const AppHeader = (props: Props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const books = useTypedSelector((state) => state.books.books);
  const isLoading = useTypedSelector((state) => state.books.loading);

  const appState = useTypedSelector((state) => state);

  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<string>("relevance"); 
  const [category, setCategory] = useState<string>("all"); 

  useEffect(() => {
    searchBooks();
  }, [sort, category]);

  const searchBooks = () => {
    if (query !== "") {
      dispatch({ type: EBookActionTypes.SET_BOOKS, payload: [] });
      dispatch(fetchBooksAPI());
      dispatch({ type: EBookActionTypes.SET_SCROLL_POSITION, payload: 0 });
    }
    history.push("/");
  };

  const onClickSearchBooks = () => {
    searchBooks();
  };

  const onChangeSort = (value: string) => {
    setSort(value);
    dispatch({ type: EBookActionTypes.SET_ORDER_BY, payload: value });
  };

  const onChangeCategory = (value: string) => {
    setCategory(value);
    dispatch({ type: EBookActionTypes.SET_CATEGORY, payload: value });
  };

  const onKeyDownInput = (e: any) => {
    if (e.code === "Enter") {
      searchBooks();
    }
  };

  const onChangeTheme = (checked: boolean) => {
    dispatch({ type: "SET_DARKMODE", payload: checked });
  };

  return (
    <div className={appState.app.darkTheme ? "AppHeader dark" : "AppHeader"}>
      <div className="AppHeader__top">
        <Input
          placeholder="book search"
          style={{ width: 200 }}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch({
              type: EBookActionTypes.SET_QUERY,
              payload: e.target.value,
            });
          }}
          onKeyDown={onKeyDownInput}
          className="AppHeader__item"
        />
        <Button
          onClick={onClickSearchBooks}
          style={{ marginLeft: 10 }}
          className="AppHeader__item"
        >
          {!isLoading ? "Search books" : <Spin spinning={isLoading} />}
        </Button>
      </div>

      <div
        className="AppHeader__bottom"
        
      >
        <div
          style={{
            margin: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          Sorting by
        </div>
        <Select
          defaultValue="relevance"
          style={{
            width: 100,
            margin: 10,
          }}
          onChange={onChangeSort}
        >
          <Select.Option value="relevance">relevance</Select.Option>
          <Select.Option value="newest">newest</Select.Option>
        </Select>
        <div
          style={{
            margin: 10,
            display: "flex",
            alignItems: "center",
          }}
        >
          Categories
        </div>
        <Select
          defaultValue="all"
          style={{
            width: 100,
            margin: 10,
          }}
          onChange={onChangeCategory}
        >
          <Select.Option value="all">all</Select.Option>
          <Select.Option value="art">art</Select.Option>
          <Select.Option value="biography">biography</Select.Option>
          <Select.Option value="computers">computers</Select.Option>
          <Select.Option value="history">history</Select.Option>
          <Select.Option value="medical">medical</Select.Option>
          <Select.Option value="poetry">poetry</Select.Option>
        </Select>
      </div>
    </div>
  );
};

export default AppHeader;
