import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./slices/country";

export default combineReducers({
  countries: countryReducer,
});
