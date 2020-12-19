import React, { useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

import {
    Form,
    Input,
    Button,
    InputNumber,
  } from 'antd';
  


  const AddRoom = () => {
    const [isCreationSucessfull, setCreationSuccessfull] = useState(false);

    console.log(isCreationSucessfull)
    console.log(setCreationSuccessfull)

    const [form] = Form.useForm();

        const initialState = {
            name: '',
            capacity: 0,
            description: '',
        }
    
      
      const handleSubmitMethod = async (data, helperMethods) => {
        console.log(data);
        try {
          await ApiServices.addRoom(data);
    
          setCreationSuccessfull(true)
          
        } catch (error) {
          console.log(error)
        }
      }
  
    return (
      <div>
        {isCreationSucessfull && <h2>Cadastro da dependencia realizado com sucesso</h2>}

        <h1>Adicione uma dependencia</h1>
        <div className="register-form">
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
          onFinish={props.handleSubmit}
          form={form}
          name="register"
        >

          <Form.Item 
          name="name"
          label="Nome da Dependencia">
            <Input name="name" value={props.values.name} onChange={props.handleChange}/>
          </Form.Item>

        

          <Form.Item 
          name ="capacity"
          label="Capacidade de Pessoas">
            <Input htmlType="number" name="capacity" value={props.values.capacity} onChange={props.handleChange}/>
          </Form.Item>

          <Form.Item 
          name ="description"
          label="Descrição">
            <Input name="description" value={props.values.description} onChange={props.handleChange}/>
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
      </div>
    );
  };
  
  export default AddRoom;

  //