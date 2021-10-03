import { Button, Input, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { populateStoreWithTestDataThunk } from '../store/booksActionCreators'
import { useTypedSelector } from '../store/hooks'

interface Props {
  
}

const AppHeader = (props: Props) => {

  const history = useHistory()

  const dispatch = useDispatch()
  const books = useTypedSelector(state => state.books.books)

  const onClick = () => {
    dispatch(populateStoreWithTestDataThunk());
    history.push("/");
  }

  useEffect(() => {
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
          defaultValue="relevant"
          style={{
            width: 100,
            margin: 10
          }}
        >
          <Select.Option
            value="relevant"
          >
            relevant
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
