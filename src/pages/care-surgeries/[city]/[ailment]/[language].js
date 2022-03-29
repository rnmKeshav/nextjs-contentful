import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

import EarlyTreatment from '../../../../modules/sem/containers/EarlyTreatment';
import Form from '../../../../modules/sem/containers/Form';
import HeroImage from '../../../../modules/sem/containers/HeroImage';

import client from '../../../../../config/contentful';
import { wrapper } from '../../../../store';
import { updateSEMPageData  } from '../../../../modules/sem/ducks/actions'

const DoctorsList = dynamic(() => import(/* webpackChunkName: "DoctorsList" */ '../../../../modules/sem/containers/DoctorsList'), {
  loading: () => <p>Doctors List loading..</p>,
  ssr: false
})

export default function AilmentPage(props) {

  const { staticEntries } = props.fields;
  const { fields: staticEntryFields } = staticEntries;

  const semPage = useSelector((state) => state.semPage)

  const { formHeader, promotionalBanner } = staticEntryFields || {};

  const { fields: { file: { url, details: { image: { height, width } } } } } = promotionalBanner;

  return (
    <div className="ailment-page">
      <HeroImage />
      <div style={{ margin: "0 20px" }}>
        <h2>{formHeader}</h2>
        <Form />
        <Image src={`https:${url}`} alt="Promotion Banner" width={width} height={height} />
        <EarlyTreatment />
        <DoctorsList />
      </div>
    </div>
  )
}

// export const getStaticPaths = async() => {

//   const entries = await client.getEntries({
//     content_type: 'cityAilmentLanguages'
//   })

//   const paths = entries.items.map(({fields}) => {

//     const { city, language, ailment } = fields;
//     return {
//       params: {
//         city,
//         language, 
//         ailment
//       }
//     }
//   })


//   return {
//     paths,
//     fallback: false
//   }

// }

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {

  const { language, ailment, city } = context.params;

  const entries = await client.getEntries({
    content_type: 'semPage2',
    include: 10,
    'fields.language': language,
    'fields.ailment': ailment,
    'fields.city': city
  });

  const { fields } = entries.items[0];

  await store.dispatch(updateSEMPageData(fields));
  return {
    props: {
      fields
    }
  }
})
