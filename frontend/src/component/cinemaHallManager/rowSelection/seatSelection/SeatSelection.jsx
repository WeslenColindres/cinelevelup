import * as React from 'react'
import { TbSofa } from 'react-icons/tb';
import ContextCinemaHallManager from '../../../contextFuncion/contectCinemaHallManager/Manager';


const SeatSelection = ({ seat, handleColorSeatSelection }) => {
    let { color, codigo } = seat;
    const { centQuantityController, setCentQuantityController, ticketAmountManagement } = React.useContext(ContextCinemaHallManager);

    const revicioncolor = () => {

        if (centQuantityController.length < ticketAmountManagement) {
            if (color === 'blue') {
                setCentQuantityController([...centQuantityController, codigo])
                color = "red";
               
            } else if (color === '#808080'){
                
            } else {
                color = "blue";
                setCentQuantityController(centQuantityController.filter((el) => el !== codigo))
               
            }
            handleColorSeatSelection(codigo, color)
        } else if (centQuantityController.length === ticketAmountManagement) {
            color = "blue";
            setCentQuantityController(centQuantityController.filter((el) => el !== codigo))
            handleColorSeatSelection(codigo, color)
            
        } else {
            
        }

    }
    return (
        <div className='AppProyect'>
            <button onClick={() => revicioncolor()}>
                <TbSofa color={seat.color} size='25' />
            </button>
        </div>
    )
}

export default SeatSelection