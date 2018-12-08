import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import MainPage from './mainPage'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
 
  
  state = {
    books : []
  }

   getbooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books})
    })
  }

  componentDidMount(){
    this.getbooks()
  }

  alterShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(response => {
      this.getbooks();
    });
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <MainPage 
          books={this.state.books} 
          alterShelf={this.alterShelf}/>
        )}/>
        <Route exact path="/searchPage" render={() =>(
          <SearchPage alterShelf={this.alterShelf}
          books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
