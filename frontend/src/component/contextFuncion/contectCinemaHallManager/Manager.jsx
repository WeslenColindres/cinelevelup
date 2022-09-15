import * as React from "react";
// import { helpHttp } from "../helpers/helpHttp";
import seatDB from '../../../database/seatDatabase';

import Cookis from 'universal-cookie';

const ContextCinemaHallManager = React.createContext();

const Manager = ({ children }) => {

  const cookis = new Cookis();

  const [seatRequestDataStore, setSeatRequestDataStore] = React.useState(seatDB);
  const [ticketAmountManagement, setTicketAmountManagement] = React.useState(0);
  const [centQuantityController, setCentQuantityController] = React.useState([]);
  const [conuntTotal, setConuntTotal] = React.useState(0);
  const [nameMovie, setNameMovie] = React.useState("");
  const [nameCinema, setNameCinema] = React.useState("");



  const tickettotal = (price, status) => {
    if (status) {
      setConuntTotal(conuntTotal + (price))
    } else {
      setConuntTotal(conuntTotal - (price))
    }

  }

  const logout = () => {
    cookis.remove('_id', { path: '/' });
    cookis.remove('first_name', { path: '/' });
    cookis.remove('last_name', { path: '/' });
    cookis.remove('email', { path: '/' });
    cookis.remove('password', { path: '/' });
  }
  const Contextlogin = (response) => {

    cookis.set('_id', response._id, { path: '/' });
    cookis.set('first_name', response.first_name, { path: '/' });
    cookis.set('last_name', response.last_name, { path: '/' });
    cookis.set('email', response.email, { path: '/' });
    cookis.set('password', response.password, { path: '/' });
    
  }


  const handleRowSeatSelection = (selectionInformation, seatCode) => {

    const seatDataStore = seatRequestDataStore.map(
      (el) =>
      (
        el.codigo === seatCode ? {
          ...el,
          A: [...selectionInformation]
        } : el
      )
    )
    setSeatRequestDataStore(seatDataStore);
  }

  const data = {
    seatRequestDataStore,
    ticketAmountManagement,
    centQuantityController,
    conuntTotal,
    nameMovie,
    nameCinema,
    setSeatRequestDataStore,
    setTicketAmountManagement,
    setCentQuantityController,
    handleRowSeatSelection,
    setConuntTotal,
    tickettotal,
    setNameMovie,
    setNameCinema,
    Contextlogin,
    logout,

  };

  return (
    <ContextCinemaHallManager.Provider value={data}>
      {children}
    </ContextCinemaHallManager.Provider>
  );
};

export { Manager };
export default ContextCinemaHallManager;