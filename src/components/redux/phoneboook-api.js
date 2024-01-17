import axios from "axios";

axios.defaults.baseURL = "";

export async function fetchAllContacts() { 
    const { data } = await axios.get("/contacts");
    return data;
};

export async function addNewContact(newContact) {
    const { data } = await axios.post("/contacts", { newContact });
    return data;
 };

export async function deleteSelectedContact(contactID) {
    const { data } = await axios.delete("/contacts/${contactID}");
    return data;
 };
