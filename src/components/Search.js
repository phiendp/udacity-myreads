import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '.././BooksAPI';
import Book from './Book';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      books: []
    }      
  }

  updateQuery = (query) => {

  }

  render() {
    const { books } = this.state;
    const { updateShelf } = this.props;

    return(
      <div className="search-books">
      <div className="search-books-bar">
        <Link
          to="/"
          className="close-search"
        >
        Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
              type="text"
              placeholder="Search by title or author"
              onChange={ (event) => this.updateQuery(event.target.value) }
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            books.map((book) => (
              <li key={ book.id }>
                <Book
                  id={ book.id }
                  shelf={ book.shelf }
                  authors={ book.authors }
                  title={ book.title }
                  imageLinks={ book.imageLinks }
                  updateShelf={ updateShelf }
              />
            </li>
            ))
          }
        </ol>
      </div>
    </div>
    );    
  }
}

export default Search
