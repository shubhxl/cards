import React from "react";
import Cards from "./Cards";
import Card1 from './Card1'
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Cards}/>
        <Route exact path="/card" component={Card1}/>
      </Router>
    </div>
  );
}

export default App;
