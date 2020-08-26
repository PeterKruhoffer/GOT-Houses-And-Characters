import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HouseGrid from "./components/HouseGrid"
import Header from "./components/ui/Header"
import CharacterGrid from "./components/CharacterGrid"
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Header />
            <HouseGrid />
          </Route>
          <Route path="/houses/:house">
            <Header />
            <CharacterGrid />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
