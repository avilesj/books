import React from 'react';
import {Link} from 'react-router-dom';

let Book = (props) => {
    let bookData = {
        id: props.id,
        picture: props.picture.replace('http://', 'https://'),
        title: props.title,
    }
    return (
        <div className="book">
            <div className="book-image">
                <img src={bookData.picture} alt="" srcSet="" />
            </div>
            <div className="book-info">
                <div className="book-title">
                    <h3>{bookData.title}</h3>
                </div>
                <div className="book-author">
                    <p>By <em>Author</em></p>
                </div>
                <div className="book-call-to-action">
                    <Link to={"/book/" + bookData.id} className="btn btn-highlight">Detail</Link>
                </div>
            </div>
        </div>
    )
}

export default Book;