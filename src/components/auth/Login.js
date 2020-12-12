import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Formik } from 'formik';

import localStorageUtils from '../../utils/localStorage.utils';

const Login = (props) => {
  const initialState = {
    email: '',
    password: ''
  }

  const redirectToLoggedArea = (role) => {
    if (role === 'sindico') {
      props.history.push('/dashboard');
    } else {
      props.history.push('/dashboard-resident')
    }
  }

  const handleSubmitMethod = async (formValues, helperMethods) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/public/login`,
        formValues,
      );

      //guardou no local storage
      localStorageUtils.set(data);

      //atualiza o app
      props.logUser(data.role);
      
      //redireciona para area logada
      redirectToLoggedArea(data.role);
    } catch (error) {
      if (error.response.data && error.response.data.type === 'Auth-Login-Invalid-Credentials') {
        helperMethods.setFieldError('email', error.response.data.message);
        helperMethods.setFieldError('password', error.response.data.message);
      }
    }
  }

  return (
    <div>
      <h1>LOGINNN</h1>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmitMethod}
      >
        {(props) => (
          <Form
          name="normal_login"
          className="login-form"
          onFinish={props.handleSubmit}
          >
          <Form.Item
            name="email"
            rules={[
              {
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Email" 
            name="email"
            value={props.values.email} 
            onChange={props.handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              value={props.values.password} 
              onChange={props.handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
          </Form>
        )}

      </Formik>
 
    </div>
  )
}

export default Login;
