import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Stocks from "./pages/Stock";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import stocks from "./Data";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route exact path="/stocks">
          <Dashboard/>
        </Route>
        <Route path="/stocks/:symbol" 
        render={(routerProps)=> <Stocks stocks={stocks} {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
