import React from 'react';

let Book = (props) => {
    return (
        <div className="book">
            <div className="book-image">
                <img src="https://via.placeholder.com/250X200C/" alt="" srcSet="" />
            </div>
            <div className="book-info">
                <div className="book-title">
                    <h3>Book Title</h3>
                </div>
                <div className="book-author">
                    <p>By <em>Author</em></p>
                </div>
                <div className="book-call-to-action">
                    <button className="btn btn-highlight">Detail</button>
                </div>
            </div>
        </div>
    )
}

export default Book;