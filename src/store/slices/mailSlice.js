import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMails } from '../../services/api';

const initialState = {
  data: null,
  loading: false,
  error: '',
};

export const fetchMails = createAsyncThunk('fetchMails', async () => {
  try {
    const res = await getMails();
    return res?.data;
  } catch (error) {
    return error?.message;
  }
});

const mailSlice = createSlice({
  name: 'mailSlice',
  initialState,

  extraReducers: {
    [fetchMails.pending]: (state) => {
      state.loading = true;
      state.query = '';
      state.error = '';
    },
    [fetchMails.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchMails.rejected]: (state, action) => {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default mailSlice.reducer;
