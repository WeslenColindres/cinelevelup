import * as React from 'react'
import SeatSelection from './seatSelection/SeatSelection';
import ContextCinemaHallManager from '../../contextFuncion/contectCinemaHallManager/Manager';

const RowSelection = ({seatrow, codigo}) => {
  const {handleRowSeatSelection} = React.useContext(ContextCinemaHallManager);
  
  const handleColorSeatSelection = (seatCode, Selection) => {

    const prueva1 = seatrow.map((el) => {
      return (el.codigo === seatCode ? {
        ...el, color: Selection
      } :
        el)
    })

    handleRowSeatSelection(prueva1, codigo)
  }
  return (
    <div >
      {
        seatrow.map(
          (selectSeat, index) => {
            console.log();
            return(
            <React.Fragment key={index}>
              <SeatSelection seat={selectSeat} handleColorSeatSelection={handleColorSeatSelection}/>
            </React.Fragment>
          )}
        )
      }
    </div>
  )
}

export default RowSelection