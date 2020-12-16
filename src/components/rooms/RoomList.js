import React from 'react';
import apiService from '../../services/api.service';
import { Component } from 'react';
import { Card, Col, Row } from 'antd';


class RoomList extends Component {
    state = {
        listofRooms: [],
    }
}

getAllRooms = async () =>{
    try {
        const rooms = await apiService.getAllRooms();

        this.setState({listofRooms: rooms})
    } catch(error) {
        console.log(error);
    }
}

render() {
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>,

}


export default RoomList;