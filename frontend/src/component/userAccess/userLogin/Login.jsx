import React from 'react'


import Input from '../../input/Input'
import { OutlineButton } from '../../button/Button';
import PageHeader from '../../page-header/PageHeader';
import { Link } from 'react-router-dom';

import moment from "moment";

moment.updateLocale('en', {
  longDateFormat : {
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
  // console.log(moment(new Date(Date.now())).format('L'));
  console.log(new Date('2022-04-26 05:00:00'));
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
              Login
            </OutlineButton>
          </div>
        </div>
        <div className="container">
          <div className="section mb-3">
          <Link to='/Registration'> holasdasdasdas </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login