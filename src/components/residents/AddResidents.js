import React, { useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

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

const AddResidents = (props) => {
  const [isRegisterSuccessfull, setRegisterSuccessfull] = useState(false)

  console.log(isRegisterSuccessfull)
  console.log(setRegisterSuccessfull)

  const [form] = Form.useForm();

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

  const redirectToLogin = () => {
    setTimeout(() => {
      props.history.push('/login');
    }, 2000)
  }

  const handleSubmitMethod = async (data, helperMethods) => {
    try {
      await ApiServices.addResidents(data);

      setRegisterSuccessfull(true)

      redirectToLogin()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {isRegisterSuccessfull && <h2>Cadastro realizado com sucesso</h2>}

      <h1>Registrar Morador</h1>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmitMethod}
        validator={() => ({})} //está assim porque estamos usando validação do ant design
      >
        
        {(props) => (
          <Form 
          onFinish={props.handleSubmit} //equivale a onSubmit
          {...formItemLayout}
          form={form}
          name="register"
          scrollToFirstError
          >

          {/* {console.log(props.values)} */}

          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              // {
              //   type: 'fullName',
              //   message: 'The input is not valid name!',
              // },
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input name="fullName" value={props.values.fullName} onChange={props.handleChange}/>
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              // {
              //   type: 'email',
              //   message: 'The input is not valid E-mail!',
              // },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input name="email" value={props.values.email} onChange={props.handleChange}/>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password name="password" value={props.values.password} onChange={props.handleChange}/>
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
            <Input.Password/>
          </Form.Item>

          <Form.Item
            name="apartment"
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
            <Input name="apartment" value={props.values.apartment} onChange={props.handleChange}/>
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            
            rules={[
              {
                // required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
              name="phone"
              value={props.values.phone}
              onChange={props.handleChange}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button htmlType="submit">
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