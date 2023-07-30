import { createSlice } from "@reduxjs/toolkit";

const plantSlice = createSlice({
  name: "plant",
  initialState: {
    plants: [],
  },
  reducers: {
    addPlant: (state, action) => {
      state.plants.push(action.payload);
    },
  },
});

export const { addPlant } = plantSlice.actions;
export default plantSlice.reducer;