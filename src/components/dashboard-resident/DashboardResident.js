import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Avatar, Space, Card } from 'antd';
import { TeamOutlined, HomeOutlined, CarryOutOutlined } from '@ant-design/icons';


const DashboardResident = () => {
  return (
    <div className="dashboard-sindico">
      <Row>
        <Col className="dashboard-sindico-box-1" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Avatar size={64} icon={<TeamOutlined />} />
          <a><Link className="color-ancor" to={"/list-residents"}>Condôminos</Link></a>
        </Col>


        <Col className="dashboard-sindico-box-2" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Avatar size={64} icon={<HomeOutlined />} />
          <a><Link className="color-ancor" to={"/list-residents"}>Dependências</Link></a>
        </Col>

        <Col className="dashboard-sindico-box-3" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Avatar size={64} icon={<CarryOutOutlined />} />
          <a><Link className="color-ancor" to={"/list-residents"}>Agendamentos</Link></a>
        </Col>
      </Row>
    </div>
  )
}

export default DashboardResident;
