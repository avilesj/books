import React from 'react';
import BookInformation from './book-information';
import BookReviewContainer from './book-review-container';

let BookContainer = (props) => {
    return (
        <div className="book-container">
            <div className="book-image">
                <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
            </div>
            <BookInformation />
            <BookReviewContainer/>
        </div>
    )
}

export default BookContainer;