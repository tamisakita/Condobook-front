import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';


const { Header } = Layout;


const navbar = ({ isUserAuth, role }) => {
  return (
    <nav>
      <ul>
      {isUserAuth ? (
        role === "sindico" ? 
        <>
          <li>Espaço do Sindico!!!</li>
        </> : 
        <>
          <li>Espaço do Morador!!!</li>
        </>
      ) : (
        <>
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">CONDOBOOK</Menu.Item>
              </Menu>
            </Header>
          </Layout>          
        </>
      )}
        
      </ul>
    </nav>
  )
}

export default navbar;