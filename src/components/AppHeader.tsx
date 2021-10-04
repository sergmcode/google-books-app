import { Button, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { fetchBooksAPI } from '../store/booksActionCreators'
import { EBookActionTypes } from '../store/booksTypes'
import { useTypedSelector } from '../store/hooks'

interface Props {
  
}

const AppHeader = (props: Props) => {

  const history = useHistory()

  const dispatch = useDispatch()
  const books = useTypedSelector(state => state.books.books)
  

  const [query, setQuery] = useState<string>('')
  const [sort, setSort] = useState<string>('relevance') // orderBy
  const [category, setCategory] = useState<string>('all') // subject:

  useEffect(() => {
    searchBooks()
  }, [sort, category])

  const searchBooks = () => {
    if(query !== ''){
      dispatch(fetchBooksAPI(query, category, '0', '40', sort))
    }
    history.push("/");
  }

  const onClick = () => {
    searchBooks();
  }

  const onChangeSort = (value: string) => {
    setSort(value);
    dispatch({ type: EBookActionTypes.SET_ORDER_BY, payload: value })
  }

  const onChangeCategory = (value: string) => {
    setCategory(value);
    dispatch({ type: EBookActionTypes.SET_CATEGORY, payload: value })
  }

  const onKeyDownInput = (e: any) => {
    if(e.code === "Enter"){
      searchBooks();
    }
  }

  useEffect(() => { // logging
    console.log(books)
  }, [books])

  return (
    <div 
      className="AppHeader"
      style={{
        height: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div 
        className="AppHeader__top"
        style={{
          display: "flex",
          margin: 10,
        }}
      >
        <Input 
          placeholder="book search"
          style={{
            width: 200,
          }}
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value);
            dispatch({ type: EBookActionTypes.SET_QUERY, payload: e.target.value })
          }}
          onKeyDown={onKeyDownInput}
        />
        <Button
          onClick={onClick}
        >
          Search books
        </Button>
      </div>
      <div 
        className="AppHeader__bottom"
        style={{
          display: "flex",
          margin: 10,
        }}
      >
        <div
          style={{
            margin: 10,
            display: "flex",
            alignItems: "center"
          }}
        >
          Sorting by
        </div>
        <Select
          defaultValue="relevance"
          style={{
            width: 100,
            margin: 10
          }}
          onChange={onChangeSort}
        >
          <Select.Option
            value="relevance"
          >
            relevance
          </Select.Option>
          <Select.Option
            value="newest"
          >
            newest
          </Select.Option>
        </Select>
        <div
          style={{
            margin: 10,
            display: "flex",
            alignItems: "center"
          }}
        >
          Categories
        </div>
        <Select
          defaultValue="all"
          style={{
            width: 100,
            margin: 10
          }}
          onChange={onChangeCategory}
        >
          <Select.Option
            value="all"
          >
            all
          </Select.Option>
          <Select.Option
            value="art"
          >
            art
          </Select.Option>
          <Select.Option
            value="biography"
          >
            biography
          </Select.Option>
          <Select.Option
            value="computers"
          >
            computers
          </Select.Option>
          <Select.Option
            value="history"
          >
            history
          </Select.Option>
          <Select.Option
            value="medical"
          >
            medical
          </Select.Option>
          <Select.Option
            value="poetry"
          >
            poetry
          </Select.Option>
        </Select>
      </div>
    </div>
  )
}

export default AppHeader
