import { configureStore } from "@reduxjs/toolkit";
import { frizeriSlice } from "./frizeriSlice";
import { programareSlice } from "./programareSlice";

export const store = configureStore({
  reducer: {
    frizeri: frizeriSlice.reducer,
    programare: programareSlice.reducer,
  },
});
