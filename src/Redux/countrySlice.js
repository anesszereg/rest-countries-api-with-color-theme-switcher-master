import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: [],
    selectedRegion: null,
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    findCountry: (state, action) => {
      state.country = state.country.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setCountry, findCountry, setRegion } = countrySlice.actions;
export default countrySlice.reducer;
