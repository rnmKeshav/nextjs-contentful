export const selectDynamicEntryFields = (state) => {
  return state.semPage.dynamicEntries.fields;
}

export const selectStaticEntryFields = (state) => {
  return state.semPage.staticEntries.fields;
}