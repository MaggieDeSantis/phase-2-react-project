import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import './style.css';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&count=10`
        );
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/planets">Planets</a>
            </li>
            <li>
              <a href="/stars">Stars</a>
            </li>
            <li>
              <a href="/galaxies">Galaxies</a>
            </li>
          </ul>
        </nav>

        <h1>NASA Image Search</h1>
        
        <Switch>
          <Route exact path="/">
            <SearchForm handleSearch={handleSearch} />
            <ImageList images={images} />
          </Route>
          <Route path="/planets" component={Planets} />
          <Route path="/stars" component={Stars} />
          <Route path="/galaxies" component={Galaxies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
