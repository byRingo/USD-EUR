import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currenciesSlice.ts";

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
