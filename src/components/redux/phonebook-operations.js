import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://65a97721219bfa3718694c4a.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const {
        contacts: { items },
      } = thunkAPI.getState();

      if (items.find(item => item.name.toLowerCase() === newContact.name.toLowerCase())) {
        Notiflix.Notify.failure(
          `Contact with name '${newContact.name}' is already in contacts.`
        );
        return thunkAPI.rejectWithValue('Contact already exist');
      } else {
        const { data } = await axios.post('/contacts', newContact);

        Notiflix.Notify.success(
          `Contact with name '${newContact.name}' has been added succesfully to contacts list.`
        );

        return data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactID}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
