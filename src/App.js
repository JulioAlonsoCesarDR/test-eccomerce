import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './components/Detail';
import Header from "./components/Header";
import ListProducts from "./containers/ListProducts";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={ListProducts}/>
          <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
