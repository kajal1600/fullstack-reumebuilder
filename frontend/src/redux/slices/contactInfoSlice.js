import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching contact information
export const fetchContactInfo = createAsyncThunk(
  'contactInfo/fetchContactInfo',
  async (userId, thunkAPI) => {
    const response = await axios.get(`http://localhost:5000/api/users/contact-information?userId=${userId}`);
    return response.data.contactInformation;
  }
);

const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setContactInfo(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchContactInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setContactInfo } = contactInfoSlice.actions;
export default contactInfoSlice.reducer;
