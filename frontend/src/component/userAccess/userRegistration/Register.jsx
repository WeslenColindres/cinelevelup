import * as React from 'react'


import Input from '../../input/Input'
import { OutlineButton } from '../../button/Button';
import PageHeader from '../../page-header/PageHeader';

import { Link } from 'react-router-dom';

import userRegisterDatabase from '../../../database/userRegisterDatabase';

import ContextCinemaHallApi from '../../contextFuncion/contectCinemaHallManager/contextApi/Api';







const Register = () => {

  const { postAxios } = React.useContext(ContextCinemaHallApi);

  const [userRegister, setUserRegister] = React.useState(userRegisterDatabase);

  const url ='https://api-proyecto-levelup.herokuapp.com/api/v1/users'

  const hanbleChange = (event) => {
    const { name, value } = event.target;
    setUserRegister({ ...userRegister, [name]: value });
  }


  const hanbleSbmit = (event) => {
    if (!userRegister.first_name
      || !userRegister.last_name
      || !userRegister.identifier
      || !userRegister.email
      || !userRegister.phone
      || !userRegister.password){
        alert("Error al procesar la informacion campo vacio")
      }else{ 
        postAxios( url,userRegister)
        alert("el usuario se a registrado corectamente...")
      }
}

  return (
    <>
      <PageHeader>
        Register
      </PageHeader>
      <div className='container_center'>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='text'
              placeholder='Nombre'
              name='first_name'
              value={userRegister.first_name}
              onChange={(first_name) => hanbleChange(first_name)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='text'
              placeholder='Apellido'
              name='last_name'
              value={userRegister.last_name}
              onChange={(last_name) => hanbleChange(last_name)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='text'
              placeholder='Identificación'
              name='identifier'
              value={userRegister.identifier}
              onChange={(identifier) => hanbleChange(identifier)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='email'
              placeholder='Email'
              name='email'
              value={userRegister.email}
              onChange={(email) => hanbleChange(email)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='number'
              placeholder='Telefono'
              name='phone'
              value={userRegister.phone}
              onChange={(phone) => hanbleChange(phone)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='password'
              placeholder='Password'
              name='password'
              value={userRegister.password}
              onChange={(password) => hanbleChange(password)}
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <OutlineButton onClick={()=> hanbleSbmit()}>
              Register
            </OutlineButton>
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Link to='/Login'> Sign In </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register