import React from 'react'


import Input from '../../input/Input'
import { OutlineButton } from '../../button/Button';
import PageHeader from '../../page-header/PageHeader';
import { Link } from 'react-router-dom';



const Register = () => {
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
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='text'
            placeholder='Apellido'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='text'
            placeholder='Identificación'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='number'
            placeholder='Telefono'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='text'
            placeholder='Metodo de pago'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Input
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <OutlineButton >
            Register
          </OutlineButton>
        </div>
      </div>
      <div className="container">
        <div className="section mb-3">
          <Link to='/Login'> holasdasdasdas </Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Register