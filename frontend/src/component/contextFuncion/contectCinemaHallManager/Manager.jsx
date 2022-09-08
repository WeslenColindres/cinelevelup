import * as React from "react";
// import { helpHttp } from "../helpers/helpHttp";
import seatDB from '../../../database/seatDatabase';

const ContextCinemaHallManager = React.createContext();

const Manager = ({ children }) => {
  const [seatRequestDataStore, setSeatRequestDataStore] = React.useState(seatDB);
  const [ticketAmountManagement, setTicketAmountManagement] = React.useState(4);
  const [centQuantityController, setCentQuantityController] = React.useState([]);

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
    setSeatRequestDataStore,
    setTicketAmountManagement,
    setCentQuantityController,
    handleRowSeatSelection,
  };

  return (
    <ContextCinemaHallManager.Provider value={data}>
      {children}
    </ContextCinemaHallManager.Provider>
  );
};

export { Manager };
export default ContextCinemaHallManager;