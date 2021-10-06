import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
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
  
  return (
    <div
      className="BookInfo"
    >
      <Card
        title={currentBook?.title}
        style={{
          width: 800,
        }}
        extra={
          <div>
            <a href={currentBook?.infoLink}>More</a>&nbsp;
            <Link to="/">Back</Link>
          </div>
        }
      >
        <div
          className="Card__content"
          style={{
            display: "flex",
          }}
        >
          <div
            className="Card__imageContainer"
            style={{
              width: 300,
              height: 400,
              display: "flex",
              flexShrink: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img 
              style={{
                maxWidth: 250,
                maxHeight: 350,
              }}
              src={currentBook?.img}
            />
          </div>
          <div
            className="Card__bookInfo"
          >
            <div
              style={{
                fontSize: '1.5rem'
              }}
            >
              {currentBook?.authors?.join(', ')}
            </div>
            <div
              style={{
                fontSize: '1.2rem'
              }}
            >
              {currentBook?.categories?.join(', ')}
            </div>
            <div>
              {currentBook?.description}
            </div>
          </div>
        </div>
      </Card>
      {/* <div
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
      </div> */}
    </div>
  );
}

export default BookInfo
