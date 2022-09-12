import * as React from 'react'
import ContextCinemaHallManager from '../contextFuncion/contectCinemaHallManager/Manager';

const ConuntTicket = ({ datos }) => {

    const { setTicketAmountManagement, ticketAmountManagement, tickettotal } = React.useContext(ContextCinemaHallManager);

    const [cantidad, setCantidad] = React.useState(0);
    const [subtotal, setSubtotal] = React.useState(null);
    const [ticketTotalStatus, setTicketTotalStatus] = React.useState(true);

    const handleContadorR = () => {
        if (cantidad < 1) {
            return;
        }
        setCantidad(cantidad - 1)
        setTicketAmountManagement(ticketAmountManagement - 1)
        setTicketTotalStatus(false)
    }



    const handlecontadorS = () => {
        if (cantidad > 50) {
            return;
        }

        setCantidad(cantidad + 1)
        setTicketAmountManagement(ticketAmountManagement + 1)
        setTicketTotalStatus(true)
    }

   

    React.useEffect(() => {
        setSubtotal(datos.price * cantidad)
    }, [cantidad]);

    React.useEffect(() => { 
        tickettotal(datos.price,ticketTotalStatus)
    }, [subtotal]);
    
    return (
        <tr>
            <td>
                <button onClick={() => handleContadorR()} >-</button>
                {datos.age_status}
                <button onClick={() => handlecontadorS()}>+</button>
            </td>
            <td>{cantidad}</td>
            <td>{datos.price}</td>
            <td>{subtotal}</td>
        </tr>
    )
}

export default ConuntTicket