import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const initialState = {
  value: 0,
  randomValue: 0,
  error: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialize: (state, action) => {
      state.value = action.payload;
    },

    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = action.payload + state.value;
    },
    getRandomValue: (state) => {
      state.error = null;
      state.randomValue = 0;
    },

    getRandomValueSuccess: (state, action) => {
      state.randomValue = action.payload;
      state.value = state.value + action.payload;
    },

    getRandomValueError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("Hydrate", action.payload);
      return {
        ...state,
        ...action.payload.counter,
      };
    },
  },
});

export const {
  initialize,
  increment,
  decrement,
  incrementByAmount,
  getRandomValue,
  getRandomValueError,
  getRandomValueSuccess,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
