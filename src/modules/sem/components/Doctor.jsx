/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'

export default function Doctor(props) {

  const { fields } = props.item;
  const { photo, name, recommendationText, experience } = fields;

  const { fields: { file: { url}  } } = photo;

  return (
    <div style={{display: "flex", gap: "10px", marginTop: "15px"}}>
      <img src={`https:${url}`} height={92} width={92} alt="Doctor Image" style={{borderRadius: "50%"}}  />
      <div>
      <p>{name}</p>
      <p>{recommendationText}</p>
      </div>
    </div>
  )
}
