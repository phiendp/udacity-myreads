import React, { Component } from 'react';
import BookShelf from './book_shelf'

class BookList extends Component {
  render() {
    const { books } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        
        <div className="list-books-content">
          <div className="list-books-content">
            <div>
              <BookShelf
                name="Currently Reading"
                books={ books }
                // updateBookShelf={ updateBookShelf }
              />
              <BookShelf
                name="Want to Read"
                books={ books }
                // updateBookShelf={ updateBookShelf }
              />
              <BookShelf
                name="Read"
                books={ books }
                // updateBookShelf={ updateBookShelf }
              />
            </div>
          </div>
        </div>          
      </div>
    );
  }
}

export default BookList
