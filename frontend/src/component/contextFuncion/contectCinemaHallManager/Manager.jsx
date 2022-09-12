import * as React from "react";
// import { helpHttp } from "../helpers/helpHttp";
import seatDB from '../../../database/seatDatabase';

const ContextCinemaHallManager = React.createContext();

const Manager = ({ children }) => {
  const [seatRequestDataStore, setSeatRequestDataStore] = React.useState(seatDB);
  const [ticketAmountManagement, setTicketAmountManagement] = React.useState(0);
  const [centQuantityController, setCentQuantityController] = React.useState([]);
  const [conuntTotal, setConuntTotal] = React.useState(0);
  const [nameMovie, setNameMovie] = React.useState("");
  const [nameCinema, setNameCinema] = React.useState("");



  const tickettotal = (price, status) => {
    if(status) {
      setConuntTotal(conuntTotal + (price))
    }else {
      setConuntTotal(conuntTotal - (price) )
    }
    
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

  };

  return (
    <ContextCinemaHallManager.Provider value={data}>
      {children}
    </ContextCinemaHallManager.Provider>
  );
};

export { Manager };
export default ContextCinemaHallManager;