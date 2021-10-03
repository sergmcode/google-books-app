import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { IBook } from '../store/booksTypes'
import { useTypedSelector } from '../store/hooks'

interface Props {
  
}

const BookInfo = (props: Props) => {

  const history = useHistory()

  const currentBookId = useTypedSelector(state => state.books.currentBookId)
  const books = useTypedSelector(state => state.books.books)

  const [currentBook, setCurrentBook] = useState<IBook>()

  useEffect(()=>{
    setCurrentBook(books.find(book => book.id === currentBookId))
  }, [])

  const onClick = () => {
    history.push("/");
  }
  
  return (
    <div
      className="BookInfo"
      style={{
        display: "flex",
        backgroundColor: "lightcyan"
      }}
      onClick={onClick}
    >
      <div
        className="BookInfo__left"
        style={{
          display: "flex",
          width: 300,
          height: 400,
          backgroundColor: "lightgreen",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={currentBook?.img} 
          style={{
            width: 250,
            height: 350,
          }}
        />
      </div>
      <div
        className="BookInfo__right"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightpink",
        }}
      >
        <p>{currentBook?.categories}</p>
        <b>{currentBook?.title}</b>
        <b>{currentBook?.authors}</b>
        <b>{currentBook?.description}</b>
      </div>
    </div>
  )
}

export default BookInfo
