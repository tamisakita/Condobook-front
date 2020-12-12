import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import AddResidents from './components/residents/AddResidents';
import Dashboard from './components/dashboard/Dashboard';
import DashboardResident from './components/dashboard-resident/DashboardResident';

import localStorageUtils from './utils/localStorage.utils';


class App extends Component {
  constructor() {
    super();

    this.state = {
      isUserAuthenticated: false,
      role: ''
    }

    this.verifyAuthenticatedUser();
  }

  logUser = (role) => {
    this.setState({ isUserAuthenticated: true, role: role });
  }

  verifyAuthenticatedUser = () => {
    const data = localStorageUtils.get();

    if (data) {
      this.state.isUserAuthenticated = true;
    }
  }

  render() {
    console.log(this.state.isUserAuthenticated)
    const { isUserAuthenticated } = this.state;
    return (
      <div>
        <Navbar isUserAuth={isUserAuthenticated} role={this.state.role}/>

        <Switch>
          {/* rota publica */}
          <Route exact path="/login" render={(props) => <Login {...props} logUser={this.logUser}/>} />
          {/* rotas privadas */}
          {isUserAuthenticated ? <Route exact path="/residents" component={AddResidents} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/dashboard" component={Dashboard} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/dashboard-resident" component={DashboardResident} /> : <Redirect to="/login" />}
        </Switch>
      </div>
    );
  }
}

export default App;
