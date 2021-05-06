import React, { Component } from 'react';
import './App.css';
import './index.css';
import './config.js';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

  // state = {
  //   inputValue: ''
  // }

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer />

        <Switch>
          <Route path="/dogs" component={SearchForm} />
          <Route path="/music" component={Nav} />
          <Route path="/computers" component={PhotoContainer} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
