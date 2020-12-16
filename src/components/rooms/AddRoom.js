import React, { useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

import {
    Form,
    Input,
    Button,
    InputNumber,
  } from 'antd';
  


  const AddRoom = (props) => {
    const [isCreationSucessfull, setCreationSuccessfull] = useState(false);

    console.log(isCreationSucessfull)
    console.log(setCreationSuccessfull)

        const initialState = {
            name: '',
            capacity: '',
            description: '',
        }
    
      const redirectToDashboard = () => {
        setTimeout(() => {
          props.history.push('/dashboard');
        }, 2000)
      }
      
      const handleSubmitMethod = async (data, helperMethods) => {
        try {
          await ApiServices.addRooms(data);
    
          setCreationSuccessfull(true)
    
          redirectToDashboard()
        } catch (error) {
          console.log(error)
        }
      }
  
    return (
      <div>
        {isCreationSucessfull && <h2>Cadastro realizado com sucesso</h2>}

        <h1>Adicione uma sala</h1>
        <Formik
            initialValues={initialState}
            onSubmit={handleSubmitMethod}
            validator={() => ({})}
        >

        {(props) => (
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
          }}
          onFinish={props.handleSubmit}
        >

          <Form.Item label="Nome da Dependencia">
            <Input name="Nome da Dependencia" value={props.values.name} onChange={props.handleChange}/>
          </Form.Item>

          
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Nome da Dependencia">
            <Input name="Nome da Dependencia" value={props.values.name} onChange={props.handleChange}/>
          </Form.Item>

          <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    
        </Form>
        )}
        </Formik>
      </div>
    );
  };
  
  export default AddRoom;