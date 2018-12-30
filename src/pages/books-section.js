import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import BookListing from '../components/book-listing/book-listing';
import Axios from 'axios';

class BooksSectionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            isLoading: true
        }
    }

    componentDidMount(){
        Axios.get("https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=" + this.props.categoryName + "&key=AIzaSyCYvqRcu1pCPcxhWNDyjiWOh1_oZ8mR0xY")
        .then((response) => {
            this.setState({
                books: response.data.items,
                isLoading: false
            })
        })
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
    categoryName: "HTML",
}
export default BooksSectionPage;