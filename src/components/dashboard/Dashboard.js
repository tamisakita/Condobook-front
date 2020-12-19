import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';
import { TeamOutlined, HomeOutlined, CarryOutOutlined } from '@ant-design/icons';


const Dashboard = () => {
  return (
    <div className="dashboard-sindico">
        <div className="dashboard-sindico-box-1" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div><Avatar size={64} icon={<TeamOutlined />} /></div>
          <div><Link className="color-ancor" to={"/list-residents"}>Condôminos</Link></div>
        </div>


        <div className="dashboard-sindico-box-2" xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div><Avatar size={64} icon={<HomeOutlined />} /></div>
          <div><Link className="color-ancor" to={"/list-room"}>Dependencias</Link></div>
        </div>

        <div className="dashboard-sindico-box-3" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div><Avatar size={64} icon={<CarryOutOutlined />} /></div>
          <div><Link className="color-ancor" to={"/list-residents"}>Agendamentos</Link></div>
        </div>
    </div>
  )
}

export default Dashboard;
