import React from 'react';
import BooksContainer from './books-container';

let BookListing = (props) => {
    return (
        <section id="books-section">
            <div className="container">
                <div className="section-title">
                    <h1>HTML Books</h1>
                    <BooksContainer />
                </div>
            </div>
        </section>
    )
}

export default BookListing;