import Input from "../Input/Input.tsx";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hook.ts";
import {
  updateCurrencyByEUR,
  updateCurrencyByUSD,
} from "../../store/currenciesSlice.ts";
import React from "react";

const CounterComponent = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export default function Counter() {
  const dispatch = useAppDispatch();
  const USD = useAppSelector((state) => state.currencies.USD);
  const EUR = useAppSelector((state) => state.currencies.EUR);
  return (
    <CounterComponent>
      <Input
        name="USD"
        value={USD}
        onChangeHandle={(e) => {
          const newUSD = e.target.value;
          dispatch(updateCurrencyByUSD({ newUSD, EUR }));
        }}
      />
      <Input
        name="EUR"
        value={EUR}
        onChangeHandle={(e) => {
          const newEUR = e.target.value;
          dispatch(updateCurrencyByEUR({ USD, newEUR }));
        }}
      />
    </CounterComponent>
  );
}
