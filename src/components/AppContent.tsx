import React from 'react'
import { Route, Router, Switch } from 'react-router'
import BookInfo from './BookInfo'
import BookList from './BookList'

interface Props {
  
}

const AppContent = (props: Props) => {
  return (
    <div 
      className="AppContent"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "beige"
      }}  
    >
      <Switch>
        <Route path="/info">
          <BookInfo />
        </Route>
        <Route path="/">
          <BookList />
        </Route>
      </Switch>
    </div>
  )
}

export default AppContent
