import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import BookListing from '../components/book-listing/book-listing';

let BooksSection = (props) => {
    return (
        <div className="has-fixed-footer">
            <Header />
            <BookListing />
            <Footer />
        </div>
    )
}

export default BooksSection;