import React from 'react';
import BooksContainer from './books-container';

let BookListing = (props) => {
    if (props.books.length === 0) {
        return(
        <section id="books-section">
            <div className="container">
                <div className="section-title">
                    <h1>No books found for {props.title}.</h1>
                </div>
            </div>
        </section>
        )
    }
    return (
        <section id="books-section">
            <div className="container">
                <div className="section-title">
                    <h1>{props.title + " Books"}</h1>
                    <BooksContainer books={props.books} />
                </div>
            </div>
        </section>
    )
}

export default BookListing;