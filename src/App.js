import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import Stocks from "./pages/Stock";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/stocks">
          <Dashboard/>
        </Route>
        <Route path="/stocks/:symbol">
          <Stocks/>
        </Route>
    </div>
  );
}

export default App;
