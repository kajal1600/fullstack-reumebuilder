import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./slices/personalInfoSlice.js";

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});

export default store;

