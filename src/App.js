import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import BooksSection from './pages/books-section';
import BookDetail from './pages/book-detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSection}/>
          <Route path="/books/category/:categoryName" exact render={(props) =>{
            return <BooksSection categoryName={props.match.params.categoryName}/>;
          }} />
          <Route path="/books/:bookId" component={BookDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
