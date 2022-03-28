import Image from 'next/image';
import React from 'react';
import DoctorsList from '../../../../modules/sem/components/DoctorsList';

import EarlyTreatment from '../../../../modules/sem/components/EarlyTreatment';
import Form from '../../../../modules/sem/components/Form';
import HeroImage from '../../../../modules/sem/components/HeroImage';

import client from '../../../../../config/contentful';

export default function AilmentPage(props) {

  const { staticEntries, dynamicEntries  } = props.fields;
  const { fields: staticEntryFields } = staticEntries;
  const { fields: dynamicEntryFields } = dynamicEntries;

  const { formHeader, formNamePlaceholderText, formPhonePlaceholderText, cityPickerHeaderText, 
    moreCitySelectorCtaText, formButtonCtaText, promotionalBanner  } = staticEntryFields || {};

  const { heroBanner, city, whyEarlyTreatmentDescription, whyEarlyTreatmentHeader, popularDoctorHeader, 
    popularDoctorDescription, doctorList, city: cities } = dynamicEntryFields || {};

    const { fields: { file: { url, details:{ image: {height, width} } } } } = promotionalBanner;

    return (
    <div className="ailment-page">
      <HeroImage heroBanner={heroBanner} />
      <div style={{margin: "0 20px"}}>
      <h2>{formHeader}</h2> 
      <Form 
        formNamePlaceholderText={formNamePlaceholderText} 
        formPhonePlaceholderText={formPhonePlaceholderText} 
        cityPickerHeaderText={cityPickerHeaderText}
        cities={cities}
        moreCitySelectorCtaText={moreCitySelectorCtaText}
        formButtonCtaText={formButtonCtaText}
      />
      <Image src={`https:${url}`} alt="Promotion Banner" width={width} height={height  } />
      <EarlyTreatment 
        whyEarlyTreatmentHeader={whyEarlyTreatmentHeader} 
        whyEarlyTreatmentDescription={whyEarlyTreatmentDescription}
      />
      <DoctorsList
        popularDoctorDescription={popularDoctorDescription}
        list={doctorList}
      />
      </div>
    </div>
  )
}

export const getStaticPaths = async() => {

  const entries = await client.getEntries({
    content_type: 'cityAilmentLanguages'
  })

  const paths = entries.items.map(({fields}) => {

    const { city, language, ailment } = fields;
    return {
      params: {
        city,
        language, 
        ailment
      }
    }
  })


  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async(context) => {

  const { language, ailment, city } = context.params;

  const entries = await client.getEntries({
    content_type: 'semPage2',
    include: 10,
    'fields.language': language,
    'fields.ailment': ailment,
    'fields.city': city
  });

  const { fields } = entries.items[0];
  return {
    props: {
      fields
    }
  }
}
