
import React from 'react'
import ConuntTicket from './ConuntTicket';

const Contador = ({ datosCinema }) => {
  console.log(datosCinema);
  return (
    <>
      {datosCinema.branch_office_id.precio.map((el, index) => {
        return (
          <ConuntTicket key={index} datos={el} />

        )
      })}
    </>
  );

}

export default Contador