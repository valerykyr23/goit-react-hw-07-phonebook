export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

// export const selectFilteredContacts = state => {

//   const contacts = selectContacts(state);
//   const filter = selectFilteredContacts(state);

//   return contacts.filter(
//     item =>
//       filter === '' ||
//       item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };