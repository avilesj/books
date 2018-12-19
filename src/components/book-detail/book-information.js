import React from 'react';

let BookInformation = (props) => {
    return (
        <div className="book-info">
            <div className="book-title">
                <h1>Book Title</h1>
            </div>
            <div className="book-author">
                <h3>Author</h3>
            </div>
            <div className="book-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae doloremque assumenda, exercitationem porro quidem
                    autem. Corporis fugit, debitis ipsum repellat beatae nobis
                    numquam aut, accusantium earum adipisci eius dolorem similique.
                </p>
            </div>
        </div>
    )
}

export default BookInformation;