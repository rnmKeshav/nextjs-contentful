import { connect } from "react-redux";

import DoctorsList from "../components/DoctorsList";
import { selectDynamicEntryFields } from "../ducks/selectors";

const mapStateToProps = (store) => {

  const { doctorList = [], popularDoctorDescription } = selectDynamicEntryFields(store);

  return {
    list: doctorList,
    popularDoctorDescription
  }
}

export default connect(mapStateToProps, null)(DoctorsList);