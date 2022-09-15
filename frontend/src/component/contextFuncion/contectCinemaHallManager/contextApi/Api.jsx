import * as React from "react";

import axios from "axios";



import ContextCinemaHallManager from '../Manager';

const ContextCinemaHallApi = React.createContext();

const Api = ({ children }) => {

  const { Contextlogin } = React.useContext(ContextCinemaHallManager);

  const getAxios = async (url) => {

    await axios.get(url).then(response => {

      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })
  }

  const getAxiosLogin = async (url, login) => {
    await axios.get(url, { params: { email: login.email, password: login.password } })
      .then(response => {
        return (response.data);
      })
      .then(response => {
        if (response.length > 0) {
          var response = response[0];
          Contextlogin(response);
          alert(`bienvenido ${response.first_name} ${response.last_name}`)
        } else {
          alert('el usuario o la contraseña son incorrectos ')
        }
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const postAxios = (url, register) => {

    axios.post(url, register)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const putAxios = (url, id) => {

    // axios.get(`${url}/${id}`).then(response => {
    //   // setstate(response.data)
    //   console.log(response.data);

    // }).catch(error => {
    //   console.log(error.message);
    // })

  }

  const deleteAxios = (url, id) => {

    axios.get(`${url}/${id}`).then(response => {
      // setstate(response.data)
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })

  }




  const data = {
    getAxios,
    getAxiosLogin,
    postAxios,
    putAxios,
    deleteAxios,

  };

  return (
    <ContextCinemaHallApi.Provider value={data}>
      {children}
    </ContextCinemaHallApi.Provider>
  );
};

export { Api };
export default ContextCinemaHallApi;