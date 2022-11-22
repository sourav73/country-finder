import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
  }
);

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async (name) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return response.data;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    list: [],
    loading: false,
    error: null,
    country: {
      loading: false,
      error: null,
      details: {},
    },
  },
  reducers: {
    removeCountry: (countries) => {
      countries.country = {};
    },
  },
  extraReducers: (builder) => {
    // Getting all countries
    builder.addCase(fetchCountries.pending, (countries) => {
      countries.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (countries, action) => {
      countries.loading = false;
      countries.error = null;
      countries.list = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (countries, action) => {
      countries.loading = false;
      countries.list = [];
      countries.error = action.error.message;
    });
    // Getting single country
    builder.addCase(fetchCountry.pending, (countries) => {
      countries.country.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (countries, action) => {
      countries.country.loading = false;
      countries.country.error = null;
      countries.country.details = action.payload;
    });
    builder.addCase(fetchCountry.rejected, (countries, action) => {
      countries.country.loading = false;
      countries.country.details = {};
      countries.country.error = action.error.message;
    });
  },
});

export const { removeCountry } = countrySlice.actions;

export default countrySlice.reducer;
