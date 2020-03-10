import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import Home from './views/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
         
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/beers" exact component={Beers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/> 
         </Switch>

         </BrowserRouter>
      </div>
    );
  }
}

export default App;
