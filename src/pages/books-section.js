import React from 'react';

let BooksSection = (props) => {
    return (
        <section id="books-section">
            <div className="container">
                <div className="section-title">
                    <h1>HTML Books</h1>
                </div>
                <div className="books-container">
                    <div className="book">
                        <div className="book-image">
                            <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
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
                    <div className="book">
                        <div className="book-image">
                            <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
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
                    <div className="book">
                        <div className="book-image">
                            <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
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
                    <div className="book">
                        <div className="book-image">
                            <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
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
                </div>
            </div>
        </section>
    )
}

export default BooksSection;