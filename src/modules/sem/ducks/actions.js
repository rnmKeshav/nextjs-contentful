import actionTypes from "./types"

export const updateSEMPageData = (payload) => {
  return {
    type: actionTypes.UPDATE_SEM_PAGE_DATA,
    payload
  }
}