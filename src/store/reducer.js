import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./slices/country";
import modalReducer from "./slices/modal";

export default combineReducers({
  countries: countryReducer,
  modal: modalReducer,
});
