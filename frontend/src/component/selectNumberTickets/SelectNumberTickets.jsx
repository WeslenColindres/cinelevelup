import React from 'react';
import Contador from './SelectTicket';
import './selectNumberTickets.scss';
import axios from 'axios';
import ContextCinemaHallManager from '../contextFuncion/contectCinemaHallManager/Manager';

import conemaDatabase from '../../database/cinemaDatabase';



const SelectNumberTickets = () => {
    const [state, setstate] = React.useState(conemaDatabase);
    const { setNameCinema } = React.useContext(ContextCinemaHallManager);
    const url = 'https://api-proyecto-levelup.herokuapp.com/api/v1/Cinemas';
    const peticionGet = () => {
        axios.get(url).then(response => {
            setstate(response.data)
            console.log(response.data);

        }).catch(error => {
            console.log(error.message);
        })

    }
    // console.log(state);

    React.useEffect(() => {
        peticionGet();
    }, []);

    React.useEffect(() => {
        setNameCinema(state.data[0].name)
    }, [state]);
    // console.log(state.data.length);

    return (
        <div >
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>CANTIDAD</th>
                        <th>COSTO</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.data.length > 0 ? (
                            state.data[0].branch_office.map((el, index) => {

                                return(
                               <Contador key= {index} datosCinema={el} />
                            )})
                       ): (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SelectNumberTickets