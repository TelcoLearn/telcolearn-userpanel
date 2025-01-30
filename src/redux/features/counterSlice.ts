import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterStatus = "active" | "pending" | "inactive";

type CounterState = {
  count: number;
  status: CounterStatus;
};

const initialState = {
  count: 0,
  status: "pending",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus: (state, action: PayloadAction<CounterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStatus } = counterSlice.actions;

export default counterSlice.reducer;
