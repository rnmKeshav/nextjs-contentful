import { connect } from "react-redux";

import HeroImage from "../components/HeroImage";
import { selectDynamicEntryFields } from "../ducks/selectors";

const mapStateToProps = (store) => {

  const { heroBanner = {}  } = selectDynamicEntryFields(store);

  return {
    heroBanner
  }
}

export default connect(mapStateToProps, null)(HeroImage);