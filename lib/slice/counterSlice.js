import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "conter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    random: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {decrement, increment, random} = counterSlice.actions

export default counterSlice.reducer