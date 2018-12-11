import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

let BookDetail = (props) => {
    return (
        <div class="has-fixed-footer">
            <Header />
            <section id="book-detail">
                <div className="container">
                    <div className="book-container">
                        <div className="book-image">
                            <img src="https://via.placeholder.com/250X200C/" alt="" srcset="" />
                        </div>
                        <div className="book-info">
                            <div className="book-title">
                                <h1>Book Title</h1>
                            </div>
                            <div className="book-author">
                                <h3>Author</h3>
                            </div>
                            <div className="book-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque assumenda, exercitationem
                                  porro quidem autem. Corporis fugit, debitis ipsum repellat beatae nobis numquam aut, accusantium earum
                adipisci eius dolorem similique.</p>
                            </div>
                            <div className="book-review">
                                <div className="book-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="book-review-paragraph">
                                    <p>(11)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default BookDetail;