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

      this.setState({ listOfBookings: bookings })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAllBookings();
  }

  deleteBookingById = async (id) => {
    try {
      await apiService.deleteBookingById(id);

      this.getAllBookings();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.state.listOfResidents)
    const columns = [
      { title: 'Nome', dataIndex: 'name', key: 'name' },
      { title: 'Apartamento', dataIndex: 'apartment', key: 'apartment' },
      { title: 'Email', dataIndex: 'email', key: 'email' },
      {
        title: '',
        dataIndex: 'key',
        key: 'x',
        render: (residentId) => {
          return <Button type="primary" onClick={() => this.deleteResident(residentId)}>Delete</Button>
        },
      },
    ];
    
    const data = this.state.listOfResidents.map( resident => {
      const objectData = 
      {
        key: resident._id,
        name: resident.fullName,
        apartment: resident.apartment,
        email: resident.email,
      }
      return objectData;
    })
    // console.log(this.state.listOfResidents)

    return(
      <div>
        <h1>Lista dos condôminos</h1>
        <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={data}
        />
        <Link to={`/register`}>
        <Button type="primary" block>
        Registrar novo morador
        </Button>
        </Link>
      </div>
    )
  }
}

export default ResidentsList;