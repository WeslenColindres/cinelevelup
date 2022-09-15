import * as React from 'react'
import "./MenuTabs.scss";

import { OutlineButton } from '../button/Button';

import CinamaHallManager from '../cinemaHallManager/CinamaHallManager';

import ContextCinemaHallManager from '../contextFuncion/contectCinemaHallManager/Manager';

import SelectNumberTickets from '../selectNumberTickets/SelectNumberTickets';


const MenuTabs = () => {

    const { ticketAmountManagement, conuntTotal, nameMovie, setConuntTotal, setTicketAmountManagement, nameCinema } = React.useContext(ContextCinemaHallManager);

    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    React.useEffect(() => {
        setConuntTotal(0);
        setTicketAmountManagement(0);
    }, []);

    return (

        <div className="container margin-top" >
            <div className="bloc-tabs">

                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    disabled
                >
                    SELECCIONA HORARIO
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    disabled
                >
                    ESCOGE TU LUGAR
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    disabled
                >
                    HAZ TU PAGO
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    disabled
                >
                    CONFIRMA TU COMPRA
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div className="container_center">
                        <div>
                            <div>
                                <h3>Movie {nameMovie}</h3>
                                <h3>Cinema {nameCinema}</h3>

                            </div>

                            <div>
                                <h3>Total {conuntTotal}</h3>
                            </div>
                        </div>
                        <hr />
                        <h2>SELECCIONA HORARIO</h2>

                        <hr />

                        <SelectNumberTickets />

                        <hr />

                        <div>
                            {ticketAmountManagement > 0 ?
                                <OutlineButton onClick={() => toggleTab(2)}>Next</OutlineButton>
                                : ""
                            }
                        </div>
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? "content  active-content " : "content"}
                >
                    <div className="container_center">
                        <h2>Selecciona tus asientos</h2>
                        <hr />

                        <CinamaHallManager />

                        <hr />
                        <div>
                            <OutlineButton onClick={() => toggleTab(1)}>atras</OutlineButton>
                            <OutlineButton onClick={() => toggleTab(3)}>Next</OutlineButton>
                        </div>
                    </div>

                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <div className="container_center">
                        <h2>Porfavor seleccione metodo de pago</h2>
                        <hr />
                        <div>
                            <OutlineButton onClick={() => toggleTab(2)}>atras</OutlineButton>
                            <OutlineButton onClick={() => toggleTab(4)}>Next</OutlineButton>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={toggleState === 4 ? "content  active-content" : "content"}
            >
                <div className="container_center">
                    <h2>Confirmar Pago</h2>
                    <hr />
                    <div>
                        <OutlineButton onClick={() => toggleTab(3)}>atras</OutlineButton>
                        <OutlineButton >Confirmar</OutlineButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MenuTabs;