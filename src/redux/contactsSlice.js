import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handleFulfilled, handleFulfilledAdd, handleFulfilledDelete, handleFulfilledFetch, handlePending, handleRejected } from './reducers';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [fetchContacts, addContact, deleteContact];

const addStatus = status => arrThunks.map(item => item[status]);

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

export const contactsReducer = contactsSlice.reducer;
