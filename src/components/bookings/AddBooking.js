import React, { Component } from 'react';

import apiServices from '../../services/api.service';
 
class AddBooking extends Component {
    state = {
      room: "",
      bookingstart: "",
    }
     
    handleFormSubmit = async (event) => {
      try {
        event.preventDefault();
  
        const { room, bookingstart } = this.state;
  
        await apiServices.createbooking({ room, bookingstart });
  
        this.props.getData();
        
        this.setState({ room: "", bookingstart: "" });
      } catch (error) {
        console.log(error);
      }
    }
   
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
   
    render(){
      return(
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
   
  export default AddBooking;