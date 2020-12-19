import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import AddResidents from './components/residents/AddResidents';
import Dashboard from './components/dashboard/Dashboard';
import DashboardResident from './components/dashboard-resident/DashboardResident';
import ResidentsList from './components/residents/ResidentsList';
import AddRoom from './components/rooms/AddRoom';
import RoomList from './components/rooms/RoomList';
import AddBooking from './components/bookings/AddBooking';

import localStorageUtils from './utils/localStorage.utils';
import BookingList from './components/bookings/BookingList';

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
      // eslint-disable-next-line
      this.state.isUserAuthenticated = true;
      // eslint-disable-next-line
      this.state.role = data.role;
    }
  }

  changeUserAuthStatus = (status) => {
    this.setState({ isUserAuthenticated: status });
  }

  logoutUser = async () => {
    await localStorageUtils.delete();

    this.changeUserAuthStatus(false);

    this.setState({ role: '' })
  }

  render() {
    console.log(this.state.isUserAuthenticated)
    const { isUserAuthenticated } = this.state;
    return (
      <div>
        <Navbar isUserAuth={isUserAuthenticated} role={this.state.role} logoutUser={this.logoutUser}/>

        <Switch>
          {/* rota publica */}
          <Route exact path="/login" render={(props) => <Login {...props} logUser={this.logUser}/>} />
          {/* rotas privadas */}
          {isUserAuthenticated ? <Route exact path="/register" component={AddResidents} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/dashboard" component={Dashboard} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/dashboard-resident" component={DashboardResident} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/list-residents" component={ResidentsList} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/create-room" component={AddRoom} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/list-room" component={RoomList} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/create-booking" component={AddBooking} /> : <Redirect to="/login" />}
          {isUserAuthenticated ? <Route exact path="/list-booking" component={BookingList} /> : <Redirect to="/login" />}
        </Switch>
      </div>
    );
  }
}

export default App;
