// import * as PhonebookApi from "./phoneboook-api";
import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://644a708a79279846dce8a780.mockapi.io/contacts";




export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async () => {
         const { data } = await axios.get("/contacts");
    return data;
    });

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thunkAPI) => {
       const { data } = await axios.post("/contacts", { newContact });
    return data;
    });

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactID, thunkAPI) => {
        const { data } = await axios.delete("/contacts/${contactID}");
    return data;
})


// export const fetchContacts = createAsyncThunk("contacts/fetchAll",
//     async () => {
//         const { data } = await PhonebookApi.fetchAllContacts();
//         return data;
//     });

// export const addContact = createAsyncThunk("contacts/addContact",
//     async (newContact, thunkAPI) => {
//         const { data } = await PhonebookApi.addNewContact(newContact);
//         return data;
//     });

// export const deleteContact = createAsyncThunk("contacts/deleteContact",
//     async (contactID, thunkAPI) => {
//         const { data } = await PhonebookApi.deleteSelectedContact(contactID);
//         return data;
// })