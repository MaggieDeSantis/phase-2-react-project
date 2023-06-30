import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';
import SingleImage from './components/SingleImage';
import RandomNASAImage from './components/RandomNASAImage';
import './style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>NASA Image Search</h1>
        <Switch>
          <Route exact path="/">
            <RandomNASAImage />
            <SearchForm />
            <ImageList />
          </Route>
          <Route path="/image/:id" component={SingleImage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
