import React from "react";
import { InputButton, InputComponent } from "./Input.ts";

type InputProps = {
  name: string;
  value: number;
  onChangeHandle: React.ChangeEventHandler;
};

export default function Input({ name, value, onChangeHandle }: InputProps) {
  return (
    <InputComponent>
      <label htmlFor={name}>{name}</label>
      <InputButton
        type="number"
        id={name}
        value={value}
        onChange={onChangeHandle}
        placeholder={"0"}
      />
    </InputComponent>
  );
}
