import { combineReducers } from "@reduxjs/toolkit";
import personalInfoReducer from "./slices/personalInfoSlice";

const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
});

export default rootReducer;
