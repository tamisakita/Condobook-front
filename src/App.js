import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import AddResidents from './components/residents/AddResidents';


class App extends Component {
  state = {
    isUserAuthenticated: false,
  }

  render() {
    return (
      <div>
        <Navbar isUserAuth={this.state.isUserAuthenticated} role="sindico"/>

        <Switch>
          {/* rotas publicas */}
          <Route exact path="/login" component={Login} />
          {/* rotas privadas */}
          <Route exact path="/residents/register" component={AddResidents} />
        </Switch>
      </div>
    );
  }
}


export default App;
