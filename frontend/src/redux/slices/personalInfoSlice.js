import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: {
    Firstname: "",
    LastName: "",
    Profession: "",
    Address: "",
    City: "",
    State: "",
    ZipCode: "",
  },
  store: [],
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = { ...state.input, ...action.payload };
    },
    addDetails: (state) => {
      state.store.push(state.input);
      state.input = initialState.input; // Input reset karne ke liye
    },
  },
});

export const { updateInput, addDetails } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
