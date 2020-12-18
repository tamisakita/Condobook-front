import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from 'antd';
import { TeamOutlined, CarryOutOutlined } from '@ant-design/icons';


const DashboardResident = () => {
  return (
    <div className="dashboard-sindico">
        <div className="dashboard-sindico-box-1" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div><Avatar size={64} icon={<TeamOutlined />} /></div>
          <div><a><Link className="color-ancor" to={"/create-booking"}>Meus agendamentos</Link></a></div>
        </div>

        <div className="dashboard-sindico-box-3" xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div><Avatar size={64} icon={<CarryOutOutlined />} /></div>
          <div><a><Link className="color-ancor" to={"/list-residents"}>Dependências</Link></a></div>
        </div>
    </div>
  )
}

export default DashboardResident;
