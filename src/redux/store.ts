import { configureStore } from "@reduxjs/toolkit";
import filter from './slice/filterSlice.ts'
import cart from "./slice/cartSlice.ts";

export const store = configureStore ({
  reducer: {
    filter,
    cart
  }
})

export type RootState = ReturnType<typeof store.getState>