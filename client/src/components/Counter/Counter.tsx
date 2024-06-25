import Input from "../Input/Input.tsx";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
import {
  updateCurrencyByEUR,
  updateCurrencyByUSD,
} from "../../store/currenciesSlice.ts";
import React from "react";
import { CounterComponent } from "./Counter.ts";

export default function Counter() {
  const dispatch = useAppDispatch();
  const USD = useAppSelector((state) => state.currencies.USD);
  const EUR = useAppSelector((state) => state.currencies.EUR);
  return (
    <CounterComponent>
      <Input
        name="USD"
        value={USD}
        onChangeHandle={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newUSD = +e.currentTarget.value;
          dispatch(updateCurrencyByUSD({ newUSD, EUR }));
        }}
      />
      <Input
        name="EUR"
        value={EUR}
        onChangeHandle={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newEUR = +e.target.value;
          dispatch(updateCurrencyByEUR({ USD, newEUR }));
        }}
      />
    </CounterComponent>
  );
}
