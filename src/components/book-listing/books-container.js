import React from 'react';
import Book from './book';

let BooksContainer = (props) => {
    return (
        <div className="books-container">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    )
}

export default BooksContainer;