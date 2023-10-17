import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://652ea5d20b8d8ddac0b1ba85.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thuncAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        }
        catch (error) {
            return thuncAPI.rejectWithValue(error.message);
        }
    });

    export const addContact = createAsyncThunk(
      'contacts/addContact',
      async ({ name, phone }, thuncAPI) => {
        try {
          const response = await axios.post('/contacts', { name, phone });
          return response.data;
        } catch (error) {
          return thuncAPI.rejectWithValue(error.message);
        }
      }
    );
    
    export const deleteContact = createAsyncThunk(
      'contacts/deleteContact ',
      async (id, thuncAPI) => {
        try {
          const response = await axios.delete(`/contacts/${id}`);
          return response.data;
        } catch (error) {
          return thuncAPI.rejectWithValue(error.message);
        }
      }
    );