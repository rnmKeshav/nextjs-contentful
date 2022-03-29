import { connect } from "react-redux";

import EarlyTreatment from "../components/EarlyTreatment";
import { selectDynamicEntryFields } from "../ducks/selectors";

const mapStateToProps = (store) => {

  const {  whyEarlyTreatmentHeader, whyEarlyTreatmentDescription  } = selectDynamicEntryFields(store);

  return {
    whyEarlyTreatmentHeader,
    whyEarlyTreatmentDescription
  }
}

export default connect(mapStateToProps, null)(EarlyTreatment);