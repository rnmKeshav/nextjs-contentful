import actionTypes from "./types";

const { UPDATE_SEM_PAGE_DATA } = actionTypes;

const initialState = {
  staticEntries: {},
  dynamicEntries: {},
  title: '',
  language: '',
  city: '', 
  ailment: ''
}

const onUpdateSEMPageData = (state, action) =>{
  
  return {
    ...state,
    ...action.payload
  }
}

const actionHandles = {
  [UPDATE_SEM_PAGE_DATA]: onUpdateSEMPageData
}

const semPageReducer = (state = initialState, action) => {

  const handler = actionHandles[action.type];

  const _state = Object.assign({}, state);

  return handler ? handler(state, action) : _state;
}

export default semPageReducer;