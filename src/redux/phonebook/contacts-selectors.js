// export const getContactsItems = state => state.contacts.items;
// export const getContactsFilter = state => state.contacts.filter;
// export const getLoadingSpinner = state => state.contacts.loadingSpinner;

export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;
export const getSpinner = state => state.contacts.spinner;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
