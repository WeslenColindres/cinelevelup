import axios from "axios";
import * as React from "react";


const ContextCinemaHallApi = React.createContext();

const Api = ({ children }) => {

  const getAxios = (url, id, status) => {

    if (status) {
      axios.get(url).then(response => {
        // setstate(response.data)
        console.log(response.data);

      }).catch(error => {
        console.log(error.message);
      })

    } else {
      axios.get(`${url}/${id}`).then(response => {
        // setstate(response.data)
        console.log(response.data);

      }).catch(error => {
        console.log(error.message);
      })
    }

  }

  const postAxios = (url) => {

    axios.get(url).then(response => {
      // setstate(response.data)
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })

  }

  const putAxios = (url, id) => {

    axios.get(`${url}/${id}`).then(response => {
      // setstate(response.data)
      console.log(response.data);

    }).catch(error => {
      console.log(error.message);
    })

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