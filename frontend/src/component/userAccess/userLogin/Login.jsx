import React from 'react'


import Input from '../../input/Input'
import { OutlineButton } from '../../button/Button';
import PageHeader from '../../page-header/PageHeader';
import { Link, useNavigate } from 'react-router-dom';



import moment from "moment";

import ContextCinemaHallApi from '../../contextFuncion/contectCinemaHallManager/contextApi/Api';


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

  let navigate = useNavigate();

  const { getAxiosLogin } = React.useContext(ContextCinemaHallApi);

  const url = 'https://api-proyecto-levelup.herokuapp.com/api/v1/users/login';

  const [login, setLogin] = React.useState({ email: '', password: '' });


  const hanbleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    
  }


  const handleLogin = () => {
    getAxiosLogin(url,login)
    navigate('/', { replace: true })
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
            <OutlineButton onClick={() => handleLogin()}>
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