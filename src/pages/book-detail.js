import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import BookDetail from '../components/book-detail/book-detail';

let BookDetailPage = (props) => {
    return (
        <div class="has-fixed-footer">
            <Header />
            <BookDetail/>
            <Footer />
        </div>

    )
}

export default BookDetailPage;