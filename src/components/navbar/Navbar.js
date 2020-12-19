import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

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
    return (
      <nav>
        <ul>
        {!this.props.isUserAuth &&

          <>
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                  <Menu.Item className="logo" key="1">CONDOBOOK</Menu.Item>
                </Menu>
              </Header>
            </Layout>          
          </>
        } 

        {this.props.role === "sindico" &&
          <>
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                  <Menu.Item className="logo" key="1"><Link to={"/dashboard"}>CONDOBOOK</Link></Menu.Item>
                  <Menu.Item key="2"><Link to={`/list-residents`}>Condôminos</Link></Menu.Item>
                  <Menu.Item key="3"><Link to={"/list-room"}>Dependencias</Link></Menu.Item>
                  <Menu.Item key="4"><Link to={"/list-booking"}>Agendamentos</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></Menu.Item>
                </Menu>
              </Header>
            </Layout>      
          </> 
        }

        {this.props.role === "resident" &&
          <>
            <Layout className="layout">
                <Header>
                  <div className="logo" />
                  <Menu theme="dark" mode="horizontal" >
                  <Menu.Item className="logo" key="1"><Link to={"/dashboard-resident"}>CONDOBOOK</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/create-booking">Criar agendamento</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/login" onClick={this.props.logoutUser}>Logout</Link></Menu.Item>
                  </Menu>
                </Header>
              </Layout>     
          </>
        }
        </ul>
      </nav>
    )
  }
}

export default Navbar;