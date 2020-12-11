import React, { useState } from 'react';

import { Formik } from 'formik';

import {
  Form,
  Input,
  Tooltip,
  Select,
  Button,
} from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddResidents = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="11">11</Option>
      </Select>
    </Form.Item>
  );

  const initialState = {
    fullName: '',
    password: '',
    email: '',
    apartment: '',
    phone: '',
  }

  const handleSubmitMethod = () => {
    console.log('formulario submetido!!!')
  }

  return (
    <div>
      <h1>ADD RESIDENTS</h1>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmitMethod}
      >
        
        {(props) => (
          <Form 
          onSubmit={props.handleSubmit}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '11',
          }}
          scrollToFirstError
          >

          <Form.Item
            name="fullName"
            label="Full Name"
            value={props.values.fullName}
            onChange={props.handleChange}
            rules={[
              {
                type: 'fullName',
                message: 'The input is not valid name!',
              },
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            value={props.values.email}
            onChange={props.handleChange}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            value={props.values.password}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="apartment"
            value={props.values.apartment}
            onChange={props.handleChange}
            label={
              <span>
                Apartment
                <Tooltip title="What is the apartment?">
                </Tooltip>
              </span>
            }
            rules={[
              {
                required: true,
                message: 'Please input the apartment!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            value={props.values.phone}
            onChange={props.handleChange}
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        )}

      </Formik>

      
    </div>
  );
};

export default AddResidents;