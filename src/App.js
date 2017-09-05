import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import BookList from './components/BookList';
import Search from './components/Search';

import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  constructor () {
    super();
    this.state = BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  /**
   * Change a book's shelf or add it to a list in a shelf
   */
  updateShelf = (book, updatedShelf) => {
    const { books } = this.state;

    const bookIdx = books.findIndex((key) => {
      return key.id === book.id;
    });

    let bookState = Object.assign([], books);

    if (bookIdx === -1) {
      const newBook = Object.assign({}, book);
      newBook.shelf = updatedShelf;
      bookState.push(newBook);
    } else {
      bookState[bookIdx] = Object.assign({}, bookState[bookIdx]);
      bookState[bookIdx].shelf = updatedShelf;
    }

    BooksAPI.update(book, updatedShelf).then(
      this.setState({ books: bookState })
    );
  };

  render () {
    const { books } = this.state;

    if (!books) {
      return null;
    }

    return (
      <div className="app">
        <Route exact path="/search" render={ () => (
          <Search books={ books } updateShelf={ this.updateShelf } />
        )} />

        <Route exact path="/" render={ () => (
          <BookList
            books={ books }
            updateShelf={ this.updateShelf }
          />
        ) } />
      </div>
    );
  }
}

export default BooksApp;
