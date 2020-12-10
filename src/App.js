import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}


export default App;
