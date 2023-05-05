import { configureStore } from "@reduxjs/toolkit";
import { frizeriSlice } from "./frizeriSlice";

export const store = configureStore({
  reducer: { frizeri: frizeriSlice.reducer },
});
