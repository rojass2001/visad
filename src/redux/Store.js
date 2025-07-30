import { configureStore } from "@reduxjs/toolkit";
import visaslice from "./Visaslice.js";

// Configure and export the Redux store
const Store = configureStore({
  reducer: {
    visa: visaslice,//  job slice reducer
    
  }
});

export default Store;