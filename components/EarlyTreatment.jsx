import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function EarlyTreatment(props) {

  const { whyEarlyTreatmentHeader, whyEarlyTreatmentDescription } = props;

  return (
    <section id="early-treatment">
      <h2>{whyEarlyTreatmentHeader}</h2>
      <p>{documentToReactComponents(whyEarlyTreatmentDescription)}</p>
    </section>
  )
}
