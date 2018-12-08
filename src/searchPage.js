import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './book'
import {Link} from 'react-router-dom'

class SearchPage extends React.Component{

  state = {
    query : '',
    searchedBooks : []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.changeSearchedBooks(query);
  }

  changeSearchedBooks = (query) => {
    if(query){

    BooksAPI.search(query).then((searchedBooks) => {
      if(searchedBooks.error){
        this.setState({searchedBooks : []});
      }else{
        this.setState({searchedBooks : searchedBooks});
      }})
      } else {
    this.setState({ searchedBooks : []});
      }
}

    render(){  
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange = {(event) => this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.searchedBooks.map(sBook => {
                  let shelf= "none";

                  this.props.books.map(book =>(
                    book.id === sBook.id ?
                    shelf = book.shelf : ''
                  ));

                  return(
                    <li key={sBook.id}>
                      <Book
                      book={sBook}
                      alterShelf={this.props.alterShelf}
                      onShelf ={shelf}/>
                    </li>
                  );
                })
              }
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchPage;
