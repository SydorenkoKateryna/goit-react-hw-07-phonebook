import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, { payload: { name, number } }) => {
      state.contactList.push({
        id: nanoid(),
        name,
        number,
      });
    },
    deleteContact: (state, { payload }) => {
      const index = state.contactList.findIndex(
        contact => contact.id === payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

// const persistConfigContacts = {
//   key: 'contacts',
//   storage,
// };

// export const persistedReducerContacts = persistReducer(
//   persistConfigContacts,
//   contactsSlice.reducer
// );

export const { createContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
