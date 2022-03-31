import dynamic from 'next/dynamic';
import React from 'react'

import Doctor from './Doctor';

function DoctorsList(props) {

  const { list = [], popularDoctorDescription } = props || {};

  const { fields } = list;
  const { doctor: doctors = [] } = fields || {};


  return (
    <section id="popular-doctors">
      <h2>{popularDoctorDescription}</h2>
      {
        doctors.map((item, index) => {
          return <Doctor key={index} item={item} />
        })
      }
    </section>
  )
}

export default DoctorsList