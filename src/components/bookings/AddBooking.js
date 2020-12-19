import React, { useEffect, useState } from 'react';

import { Formik } from 'formik';

import ApiServices from '../../services/api.service';

import {
    Form,
    Button,
    Select,
    DatePicker,
  } from 'antd';

  const { Option } = Select;

  
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

    console.log(isCreationSucessfull)
    console.log(setCreationSuccessfull)

        const initialState = 
         {
          room: "", 
          bookingstart: "",
        }
    
      
      const handleSubmitMethod = async (data) => {
        try {
          await ApiServices.addBookings(data);
    
          setCreationSuccessfull(true)
    
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
  },[]);


    return (
      <div>
        {isCreationSucessfull && <h2>Novo agendamento criado com sucesso</h2>}

        <h1>Crie um Agendamento</h1>
        <p className="text-booking" >Todos os agendamentos são de no máximo 1 hora, se desejar agendar mais que 1 hora, você deverá incluir mais um agendamento para a hora seguinte.</p>
        {rooms.length>0 &&(<Formik
            initialValues={initialState}
            onSubmit={handleSubmitMethod}
            validator={() => ({})}
        >

        {(props) => (
        <div className="form-add-booking">
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
 
        <Form.Item label="Selecione uma Dependência" name="room"  >
        <Select name="room" defaultValue="" style={{ width: 120 }} onChange={(value) => props.setFieldValue("room", value)}>
        {console.log(rooms)}
          {rooms.map((room)=><Option key={room.value} value={room.value}>{room.value}</Option>)}
        </Select>
        </Form.Item>

          <Form.Item name="bookingstart" label="Selecione uma data e horário"  {...config} >
        <DatePicker value={props.values.bookingstart} onChange={(_,dateString)=>props.setFieldValue("bookingstart",dateString)} showTime format="YYYY-MM-DD"/>
      </Form.Item>

          <Form.Item>
        <Button type="primary" htmlType="submit">
          Agendar
        </Button>
      </Form.Item>
    
        </Form>
        </div>
        )}
        </Formik>)}
      </div>
    );
  };
  
  export default AddBooking;