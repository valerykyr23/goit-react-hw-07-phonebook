import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContact,
} from './phonebook-operations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    extraReducers: builder => {
      builder

        .addCase(fetchContacts.pending, state => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        })
        .addCase(fetchContacts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })

        .addCase(addContacts.pending, state => {
          state.isLoading = true;
        })
        .addCase(addContacts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        })
        .addCase(addContacts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })

        .addCase(deleteContact.pending, state => {
          state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            item => item.id === action.payload.id
          );
          state.items.splice(index, 1);
        })
        .addCase(deleteContact.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  },
});


export const contactsReducer = contactsSlice.reducer;