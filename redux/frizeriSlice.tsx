import { createSlice } from "@reduxjs/toolkit";
import { Echipa } from "../data/EchipaData";

const initialState = {
  frizeri: Echipa,
  selectedFrizer: null,
};

export const frizeriSlice = createSlice({
  name: "frizeri",
  initialState,
  reducers: {
    setSelectedFrizer: (state, action) => {
      const frizerID = action.payload;
      //@ts-expect-error
      state.selectedFrizer = state.frizeri.find(
        (frizer) => frizer.id === frizerID
      );
    },
  },
});
