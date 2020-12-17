import React, { useEffect, useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

import {
    Form,
    Button,
    Cascader,
    DatePicker,
  } from 'antd';

  
const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

  const AddBooking = (props) => {
    const [isCreationSucessfull, setCreationSuccessfull] = useState(false);
    const [rooms, setRoom] = useState([]);
    const [owner, setOwner] = useState();
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
          
          //const owner = this.props.theOwner._id;
          await ApiServices.addBooking(data);

          //this.props.getTheOwner();
    
          setCreationSuccessfull(true)
    
          redirectToDashboard()
        } catch (error) {
          console.log(error)
        }
      }
      
    const getRooms = async () => {
      try{
        const roomsFromDb = await ApiServices.getAllRooms();

        const roomsMapped = roomsFromDb.map(room =>{
          const theRooms = {
            value: room.name,
            label: room.name,
          }
          return theRooms;
        })
        console.log(roomsMapped);
        
        setRoom(roomsMapped);
        return roomsMapped;

      }catch(error){
        console.log(error);
    }
  }
  
  useEffect(() => {   
    return getRooms();
  },[rooms]);

const getOwner = async () => {
  try {
    const ownersFromDb = await ApiServices.getAllResidents();

    const ownerMapped = ownersFromDb.map(ownerId =>{
      const theOnwer = {
        owner: ownerId._id
      }
      return theOnwer;
    })
    setOwner(ownerMapped);
  }catch(error){
    console.log(error);
  }
}

useEffect(() => {   
  return getOwner();
},[owner]);

    return (
      <div>
        {isCreationSucessfull && <h2>Novo agendamento criado com sucesso</h2>}

        <h1>Crie um Agendamento</h1>
        <p>Todos os agendamentos são de no máximo 1 hora, se desejar agendar mais que 1 hora, você deverá incluir mais um agendamento para a hora seguinte.</p>
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
 
        <Form.Item label="Selecione uma Dependência" >
          <Cascader
            options={rooms}
          />
          </Form.Item>

          <Form.Item name="date-time-picker" label="Selecione uma data e horário" {...config} >
        <DatePicker showTime format="YYYY-MM-DD HH" />
      </Form.Item>

          <Form.Item>
        <Button type="primary" htmlType="submit">
          Agendar
        </Button>
      </Form.Item>
    
        </Form>
        )}
        </Formik>
      </div>
    );
  };
  
  export default AddBooking