import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const { Header } = Layout;

class Navbar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Academia
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Salão de Festas
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            Brinquedoteca
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <nav>
        <ul>
        {this.props.isUserAuth ? (
          this.props.role === "sindico" ? 
          <>
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1"><Link to={"/dashboard"}>CONDOBOOK</Link></Menu.Item>
                  <Menu.Item key="1"><Link to={`/list-residents`}>Condôminos</Link></Menu.Item>
                  <Menu.Item key="1">Dependências</Menu.Item>
                  <Menu.Item key="1">Agendamentos</Menu.Item>
                  <Menu.Item key="1"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></Menu.Item>
                </Menu>
              </Header>
            </Layout>      
          </> : 
          <>
            <Layout className="layout">
                <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1"><Link to={"/dashboard-resident"}>CONDOBOOK</Link></Menu.Item>
                    <Menu.Item key="1">Meus Agendamentos</Menu.Item>
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Dependências <DownOutlined />
                      </a>
                    </Dropdown>
                    <Menu.Item key="1"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></Menu.Item>
                  </Menu>
                </Header>
              </Layout>     
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
}

// const navbar = ({ isUserAuth, role }) => {
  
// }

export default Navbar;