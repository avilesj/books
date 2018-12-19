import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import BookListing from '../components/book-listing/book-listing';

let BooksSectionPage = (props) => {
    let books = [1, 2, 3, 4, 5, 6]
    return (
        <div className="has-fixed-footer">
            <Header />
            <BookListing title={props.categoryName} books={books}/>
            <Footer />
        </div>
    )
}

BooksSectionPage.defaultProps = {
    categoryName: "",
}
export default BooksSectionPage;