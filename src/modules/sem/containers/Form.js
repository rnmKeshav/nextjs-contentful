import { connect } from "react-redux";

import Form from "../components/Form";
import { selectDynamicEntryFields, selectStaticEntryFields } from "../ducks/selectors";

const mapStateToProps = (store) => {

  const { formButtonCtaText, formNamePlaceholderText, formPhonePlaceholderText, 
    cityPickerHeaderText, moreCitySelectorCtaText  } = selectStaticEntryFields(store);

  const { city = [] } = selectDynamicEntryFields(store);

  return {
    cities: city,
    formButtonCtaText,
    formNamePlaceholderText,
    formPhonePlaceholderText,
    cityPickerHeaderText,
    moreCitySelectorCtaText
  }
}

export default connect(mapStateToProps, null)(Form);