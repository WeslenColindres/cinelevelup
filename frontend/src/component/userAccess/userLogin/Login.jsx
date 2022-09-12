import React from 'react'


import Input from '../../input/Input'
import { OutlineButton } from '../../button/Button';
import PageHeader from '../../page-header/PageHeader';
import { Link } from 'react-router-dom';

import moment from "moment";
import axios from 'axios';
import Cookis from 'universal-cookie';

moment.updateLocale('en', {
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "MM/DD/YYYY",
    l: "M/D/YYYY",
    LL: "MMMM Do YYYY",
    ll: "MMM D YYYY",
    LLL: "MMMM Do YYYY LT",
    lll: "MMM D YYYY LT",
    LLLL: "dddd, MMMM Do YYYY LT",
    llll: "ddd, MMM D YYYY LT"
  }
});

const Login = () => {
  const cookis = new Cookis();
  const [login, setLogin] = React.useState({ email: '', password: '' });


  const hanbleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  }
  const url = 'https://api-proyecto-levelup.herokuapp.com/api/v1/users';
  const getaxios = async () => {
    await axios.get(url)
      .then(response => {
        console.log(response.data);
        // return (response.data);
      })
      // .then(response => {
      //   if (response > 0) {
      //     var response = response[0];
      //     cookis.set('_id', response._id, { path: '/' });
      //     cookis.set('first_name', response.first_name, { path: '/' });
      //     cookis.set('last_name', response.last_name, { path: '/' });
      //     cookis.set('email', response.email, { path: '/' });
      //     cookis.set('password', response.password, { path: '/' });
      //     alert(`bienvenido ${response.first_name} ${response.last_name}`)
      //   } else {
      //     alert('el usuario o la contraseña son incorrectos ')
      //   }
      // })
      .catch(error => {
        console.log(error.message);
      })
  }


  return (
    <>
      <PageHeader>
        Login
      </PageHeader>
      <div className='container_center'>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='email'
              placeholder='Correo'
              value={login.email}
              onChange={(email) => hanbleChange(email)}
              name='email'
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Input
              type='password'
              placeholder='Password'
              onChange={(password) => hanbleChange(password)}
              value={login.password}
              name='password'
            />
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <OutlineButton onClick={() => getaxios()}>
              Login
            </OutlineButton >
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
            <Link to='/Registration'> Sing Up </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login