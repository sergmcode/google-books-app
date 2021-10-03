import React from 'react'
import { useTypedSelector } from '../store/hooks'
import BookThumb from './BookThumb'

interface Props {
  
}

const BookList = (props: Props) => {

  const books = useTypedSelector(state => state.books.books)

  return (
    <div
      className="BookList"
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "wrap"
      }}
    >
      {books.map(book => {
        return <BookThumb 
          id={book.id}
          img={book.img}
          categories={book.categories}
          title={book.title}
          authors={book.authors}
        />
      })}
    </div>
  )
}

export default BookList
