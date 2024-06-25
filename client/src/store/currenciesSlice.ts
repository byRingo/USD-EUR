import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CurrenciesState = {
  USD: number;
  EUR: number;
};

const initialState: CurrenciesState = {
  USD: 0,
  EUR: 0,
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {
    updateCurrencyByUSD(
      state,
      action: PayloadAction<{ newUSD: number; EUR: number }>,
    ) {
      state.USD = action.payload.newUSD;
      state.EUR = action.payload.newUSD * 1.07;
    },
    updateCurrencyByEUR(
      state,
      action: PayloadAction<{ USD: number; newEUR: number }>,
    ) {
      state.USD = action.payload.newEUR / 1.07;
      state.EUR = action.payload.newEUR;
    },
  },
});

export const { updateCurrencyByUSD, updateCurrencyByEUR } =
  currenciesSlice.actions;

export default currenciesSlice.reducer;
