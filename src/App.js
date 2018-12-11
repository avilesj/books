import React, { Component } from 'react';
import Footer from './components/footer/footer';
import PageNotFound from './pages/page-not-found';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BooksSection />
        <BookDetail />
        <PageNotFound />
        <Footer />
      </div>
    );
  }
}

export default App;
