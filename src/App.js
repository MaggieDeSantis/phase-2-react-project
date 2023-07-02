import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Planets from './Planets';
import Stars from './Stars';
import Galaxies from './Galaxies';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>NASA Image Search</h1>
        <Navbar />
        <Switch>
          <Route path="/planets" component={Planets} />
          <Route path="/stars" component={Stars} />
          <Route path="/galaxies" component={Galaxies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
