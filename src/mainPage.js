import React from 'react'
import Book from './book'
import {Link} from 'react-router-dom'

class MainPage extends React.Component{
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.filter(book => book.shelf === "currentlyReading").map(book => (
                                <li key={book.title}>
                                    <Book 
                                    book={book} 
                                    alterShelf={this.props.alterShelf}
                                    onShelf = "currentReading"/>
                               </li>
                            )) 
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.books.filter(book => book.shelf === "wantToRead").map(book => (
                          <li key={book.title}>
                            <Book 
                              book={book} 
                              alterShelf={this.props.alterShelf}
                              onShelf = "wantToRead"/>    
                           </li>
                        )) 
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                            this.props.books.filter(book => book.shelf === "read").map(book => (
                                <li key={book.title}>
                                <Book 
                                book={book} 
                                alterShelf={this.props.alterShelf}
                                onShelf = "read"/>
                               </li>
                            )) 
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/searchPage"><button>Add a book</button></Link>
            </div>
          </div>
        )
     }
}

        


export default MainPage;
