import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import Home from'./pages/Home';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Login from './pages/Login';

function App() {
  return (
    
    <Router>
    <div id="container">
    <ul>
      <nav>
   
            <Link to="/">Home</Link>
         </nav>
            <Link to="/about">About</Link>
            <nav>
            <Link to="/contact">Contact</Link>
          </nav>
         <nav>
            <Link to="/login">Login</Link>
     
      </nav>
      </ul>
      </div>

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    
    
    <div className="App">
      
    </div>
  </Router>
  );
}

export default App;
