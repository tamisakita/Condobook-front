import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../services/api.service';

import { Table, Button } from 'antd';

class BookingList extends Component {
  state = {
    listOfBookings: [],
  }

  getAllBookings = async () => {
    try {
    const bookings = await apiService.getAllBookings();
         console.log(bookings);
      this.setState({ listOfBookings: bookings })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAllBookings();
  }

  deleteBookingById = async (id) => {
    console.log(id)
    try {
      await apiService.deleteBookingById(id);

      this.getAllBookings();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.listOfBookings)
    const columns = [
      { title: 'Dependência', dataIndex: 'room', key: 'room' },
      { title: 'Data e Horário', dataIndex: 'bookingstart', key: 'bookingstart' },
      {
        title: '',
        dataIndex: 'key',
        key: 'x',
        render: (bookingId) => {
          return <Button type="primary" onClick={() => this.deleteBookingById(bookingId)}>Delete</Button>
        },
      },
    ];
    
    const data = this.state.listOfBookings.map( booking => {
      const objectData = 
      {
        key: booking._id,
        room: booking.room,
        bookingstart: booking.bookingstart,
      }
      return objectData;
    })
    // console.log(this.state.listOfResidents)

    return(
      <div>
        <h1>Lista dos Agendamentos</h1>
        <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={data}
        />
        <Link to={`/create-booking`}>
        <Button type="primary" block>
        Fazer novo Agendamento
        </Button>
        </Link>
      </div>
    )
  }
}

export default BookingList;