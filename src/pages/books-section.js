import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import BookListing from '../components/book-listing/book-listing';

class BooksSectionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            isLoading: true
        }
    }

    render() {
        return (
            <div className="has-fixed-footer">
                <Header />
                {this.state.isLoading ?
                    <p>Loading...</p>
                    :
                    <BookListing title={this.props.categoryName} books={this.state.books} />
                }
                <Footer />
            </div>
        )
    }
}

BooksSectionPage.defaultProps = {
    categoryName: "",
}
export default BooksSectionPage;