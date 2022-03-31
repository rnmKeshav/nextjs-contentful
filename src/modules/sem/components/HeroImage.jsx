import Image from 'next/image'
import React from 'react'

export default function HeroImage({heroBanner}) {

  const { fields: { file: { url, details:{ image: {height, width} } } } } = heroBanner;

  return (
    <Image src={`https:${url}`} height={height} width={width} alt="Hero Dravid Banner" />
  )
}
