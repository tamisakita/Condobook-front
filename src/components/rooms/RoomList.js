import React from 'react';
import apiService from '../../services/api.service';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

const columns = [
    { title: 'Nome da Dependência', dataIndex: 'name', key: 'name' },
    { title: 'Capacidade de Pessoas', dataIndex: 'capacity', key: 'capacity' },
    { title: 'Descrição', dataIndex: 'description', key: 'description' },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => <a>Editar</a>
    },
  ];

class RoomList extends Component {
    state = {
        listOfRooms: [],
    }


getAllRooms = async () =>{
    try {
        const rooms = await apiService.getAllRooms();

        this.setState({listOfRooms: rooms})
    } catch(error) {
        console.log(error);
    }
}

componentDidMount() {
    this.getAllRooms();
  }

render() {
    const data = this.state.listOfRooms.map( rooms => {
        const dataObject = {
            name: rooms.name,
            capacity: rooms.capacity,
            description: rooms.description,
        }
        return dataObject;
    })
    console.log(this.state.listOfRooms)


  return(  
    <div>
    <h1>Lista de Dependências</h1>
    <Table
    columns={columns}
    expandable={{
     // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
     // rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
    />
    <Link to={`/create-room`}>
    <Button type="primary" block>
    Criar novo Agendamento 
    </Button>
    </Link>
  </div>
)
}
}



export default RoomList