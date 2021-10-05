import { Card } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { EBookActionTypes } from '../store/booksTypes'

interface Props {
  id: string;
  img: string;
  categories: string[];
  title: string;
  authors: string[];
}

const BookThumb = (props: Props) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch({ type: EBookActionTypes.SET_CURRENT_BOOK_ID, payload: props.id })
    history.push("/info")
  }

  const authorsString = () => {
    let str = props.authors?.join(', ')
    if(str){
      if(str.length > 18){
        return str.slice(0,18) + '...'
      } else {
        return str
      }
    } else {
      return ''
    }
  }

  const categoriesString = () => {
    let str = props.categories?.join(', ')
    if(str){
      if(str.length > 18){
        return str.slice(0,18) + '...'
      } else {
        return str
      }
    } else {
      return ''
    }
  }

  return (
    <div
      className="BookThumb"
      // style={{
      //   margin: 10,
      //   width: 400,
      //   height: 400,
      //   backgroundColor: "crimson",
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   cursor: "pointer"
      // }}
      onClick={onClick}
    >
      <Card
        title={props.title}
        hoverable
        style={{
          width: 250,
          height: 300,
          margin: 10,
        }}
        extra={<a href="#">More</a>}
        
      >
        <div
          style={{
            height: 150,
          }}
        > 
          <img src={props.img} style={{
            maxWidth: 100,
            maxHeight: 120,
          }} /> 
        </div>
        <div>
          { authorsString() }
        </div>
        <div>
          {categoriesString()}
        </div>
        
      </Card>
      {/* <div 
        className="BookThumb__top"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: 150,
          height: 150,
          backgroundColor: "darkblue",
        }}
      >
        <img src={props.img} style={{
          width: 100,
          height: 100,
        }} />
      </div>
      <div 
        className="BookThumb__bottom"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flexDirection: "column",
          width: 150,
          height: 100,
          backgroundColor: "darkorange",
        }}
      >
        <p>{props.categories}</p>
        <p>{props.title}</p>
        <p>{props.authors}</p>
      </div> */}
    </div>
  )
}

export default BookThumb
