import React, { useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

import {
    Form,
    Input,
    Button,
    Cascader,
  } from 'antd';
import apiService from '../../services/api.service';
  


  const AddBooking = (props) => {
    const [isCreationSucessfull, setCreationSuccessfull] = useState(false);

    console.log(isCreationSucessfull)
    console.log(setCreationSuccessfull)

        const initialState = {
            room: '',
            bookingstart: '',
            owner: '',
        }
    
      const redirectToDashboard = () => {
        setTimeout(() => {
          props.history.push('/dashboard');
        }, 2000)
      }
      
      const handleSubmitMethod = async (data, helperMethods) => {
        try {
          await ApiServices.addBooking(data);
    
          setCreationSuccessfull(true)
    
          redirectToDashboard()
        } catch (error) {
          console.log(error)
        }
      }
      
      const getRooms = async () => {
        try{
        const rooms = await apiService.getAllRooms();


        }catch(error){
          console.log(error);
        }
      }
    
    return (
      <div>
        {isCreationSucessfull && <h2>Novo agendamento criado com sucesso</h2>}

        <h1>Adicione uma dependencia</h1>
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
        >

          <Form.Item 
          name="Nome da Dependencia"
          label="Nome da Dependencia">
            <Input name="Nome da Dependencia" value={props.values.name} onChange={props.handleChange}/>
          </Form.Item>

          
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                render: (rooms) =>{
                  return getRooms(rooms)//verificar como referenciar as rooms no cascader
                },
               // value: getRooms,
                label: 'rooms',
              },
            ]}
          />
          </Form.Item>

          <Form.Item 
          name ="Descrição"
          label="Descrição">
            <Input name="Descrição" value={props.values.description} onChange={props.handleChange}/>
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
  
  export default AddBooking