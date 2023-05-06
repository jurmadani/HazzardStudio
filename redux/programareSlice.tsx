import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPosition: 0,
  headerTitle: "",
};

export const programareSlice = createSlice({
  name: "programare",
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setHeaderTitle: (state, action) => {
      state.headerTitle = action.payload;
    },
  },
});
