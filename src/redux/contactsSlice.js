import initialState from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContactThunk, addContactThunk, deleteContactThunk } from './contactsThunk';

function handlePending(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}

function fetchFulfilled(state, { payload }) {  
  state.contacts.isLoading = false;
  state.contacts.items = payload;
}
function addFulfilled(state, { payload }) {  
  state.contacts.isLoading = false;
  state.contacts.items.push(payload);
}

function deleteFulfilled(state, { payload }) {  
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
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder      
      .addCase(fetchContactThunk.fulfilled, fetchFulfilled)      
      .addCase(addContactThunk.fulfilled, addFulfilled)      
      .addCase(deleteContactThunk.fulfilled, deleteFulfilled)      
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
