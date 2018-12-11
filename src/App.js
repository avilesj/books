import React, { Component } from 'react';
import PageNotFound from './pages/page-not-found';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';

class App extends Component {
  render() {
    return (
      <div>
        <BooksSection />
        <BookDetail />
        <PageNotFound />
      </div>
    );
  }
}

export default App;
