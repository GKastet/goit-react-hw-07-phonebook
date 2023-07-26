import initialState from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsThunk';

function handlePending(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}

function fetchFulfilled(state, { payload }) {
  console.log(payload);
  state.contacts.isLoading = false;
  state.contacts.items = payload;
}
function addFulfilled(state, { payload }) {
  console.log(payload);
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
}

function deleteFulfilled(state, { payload }) {
  console.log(payload);
  state.contacts.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== payload.id
  );
}

function handleRejected(state, { error }) {
  state.contacts.isLoading = false;
  state.contacts.error = error.message;
}
// function handleRejected(state, {payload}){
//   state.isLoading = false;
//   state.error = payload;
// }

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    // addContact: {
    //   reducer(state, { payload }) {
    //     state.contacts.push(payload);
    //   },
    //   prepare: contact => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name: contact.name,
    //         number: contact.number,
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactThunk.pending, handlePending)
      .addCase(fetchContactThunk.fulfilled, fetchFulfilled)
      .addCase(fetchContactThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, addFulfilled)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, deleteFulfilled)
      .addCase(deleteContactThunk.rejected, handleRejected)
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
