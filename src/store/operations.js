import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchShowsList } from 'services/SearchShows-api';

export const GetShowsList = createAsyncThunk(
  'contacts/fetchAll',
  async (searchingString, { rejectWithValue }) => {
    try {
      const data = await FetchShowsList(searchingString);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
