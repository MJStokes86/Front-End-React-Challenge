import React, {Component} from 'react';


import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"

//Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact/Contact"



class App extends Component  {
  render() {
    return (
      <div className="App">
        
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
       
      </div>
    );
  }
  
}

export default App;
