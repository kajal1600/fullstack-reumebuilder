// import { configureStore } from "@reduxjs/toolkit";
// import personalInfoReducer from "./slices/personalInfoSlice";

// const store = configureStore({
//   reducer: {
//     personalInfo: personalInfoReducer,
//   },
// });

// export default store;





import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from './slices/personalInfoSlice';
import contactInfoReducer from './slices/contactInfoSlice';

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    contactInfo: contactInfoReducer,
  },
});

export default store;
