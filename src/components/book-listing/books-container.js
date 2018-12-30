import React from 'react';
import Book from './book';

let BooksContainer = (props) => {
    return (
        <div className="books-container">
            {
                props.books.map((e, i) => {
                    return(<Book key={e.id} title={e.volumeInfo.title} picture={e.volumeInfo.imageLinks.thumbnail} id={e.id}/>)
                })
            }
        </div>
    )
}

export default BooksContainer;