import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './BookShelf';

class BookList extends Component {

  _filterBooks = (shelf) => {
    const { books } = this.props;
    return books.filter((book) => book.shelf === shelf);
  }

  render () {
    const { updateShelf } = this.props;

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              name="Currently Reading"
              books={ this._filterBooks('currentlyReading') }
              updateShelf={ updateShelf }
            />
            <Bookshelf
              name="Want to Read"
              books={ this._filterBooks('wantToRead') }
              updateShelf={ updateShelf }
            />
            <Bookshelf
              name="Read"
              books={ this._filterBooks('read') }
              updateShelf={ updateShelf }
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
          >
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookList;
