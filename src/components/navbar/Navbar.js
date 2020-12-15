import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

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
        {this.props.isUserAuth ? (
          this.props.role === "sindico" ? 
          <>
            <li>Espaço do Sindico!!!</li>
          </> : 
          <>
            <li>Espaço do Morador!!!</li>
            <Layout>
              <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                  </Menu.Item>
                  <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                  </Menu.Item>
                  <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                  })}
                </Header>
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  Content
                </Content>
              </Layout>
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