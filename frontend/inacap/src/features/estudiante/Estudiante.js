import React from 'react'
import MiTabla from '../mitabla/MiTabla'

const Estudiante = () => {

    const data = [
        {
          key: '1',
          name: 'Juanito Pérez',
          age: 32,
          address: 'Alameda 123',
        },
        {
          key: '2',
          name: 'Mario Soto',
          age: 42,
          address: 'Las rejas 444',
        },
        {
          key: '3',
          name: 'Marianela García',
          age: 32,
          address: 'Providencia 999',
        },
        {
          key: '4',
          name: 'Pamela Pérez',
          age: 32,
          address: 'Vicuña Mackenna 3266',
        },
      ];
  return (
    <MiTabla valores={data} fecha="1/2/2222" />
  )
}

export default Estudiante;