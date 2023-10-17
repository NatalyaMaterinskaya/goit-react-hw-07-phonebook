import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [fetchContacts, addContact, deleteContact];

const addStatus = status => arrThunks.map(item => item[status]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledFetch = (state, { payload }) => {
  state.items = payload;
    console.log('first', 'first');
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload);
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...addStatus(PENDING)), handlePending)
      .addMatcher(isAnyOf(...addStatus(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...addStatus(REJECTED)), handleRejected);
  },
});

// {
//   addContact: {
//     reducer(state, action) {
//       if (isExist(state.items, action.payload)) {
//         alert(`${action.payload.name} is already in contacts.`);
//         return;
//       }
//       state.items.push(action.payload);
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           name,
//           number,
//           id: nanoid(),
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     state.items = state.items.filter(
//       contact => contact.id !== action.payload
//     );
//   },
// },

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
