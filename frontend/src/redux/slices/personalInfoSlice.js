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
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = {
        ...state.input,
        ...action.payload,
      };
    },
    setPersonalInfo: (state, action) => {
      state.input = action.payload;
    },
    resetPersonalInfo: () => initialState,
  },
});

export const { updateInput, setPersonalInfo, resetPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;

