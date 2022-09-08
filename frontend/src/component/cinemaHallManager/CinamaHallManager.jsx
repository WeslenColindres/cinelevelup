import * as React from 'react'
import "./style.css";
import RowSelection from './rowSelection/RowSelection';
import ContextCinemaHallManager from '../contextFuncion/contectCinemaHallManager/Manager';




const CinamaHallManager = () => {
  const { seatRequestDataStore } = React.useContext(ContextCinemaHallManager);

  return (
    <div className='AppProyect2' >
      {
        seatRequestDataStore.map(
          (selection, index) => {

            return (
              selection.A
                ?
                <React.Fragment key={index}>
                  <RowSelection seatrow={selection.A} codigo={selection.codigo} />
                </React.Fragment>
                : selection.B
                  ?
                  <React.Fragment key={index}>
                    <RowSelection seatrow={selection.B} codigo={selection.codigo} />
                  </React.Fragment>
                  : selection.C
                    ?
                    <React.Fragment key={index}>
                      <RowSelection seatrow={selection.C} codigo={selection.codigo} />
                    </React.Fragment>
                    : selection.D
                      ?
                      <React.Fragment key={index}>
                        <RowSelection seatrow={selection.D} codigo={selection.codigo} />
                      </React.Fragment>
                      :
                      <React.Fragment key={index}>
                        <RowSelection seatrow={selection.E} codigo={selection.codigo} />
                      </React.Fragment>
            )
          }

        )
      }
    </div>
  )
}

export default CinamaHallManager;