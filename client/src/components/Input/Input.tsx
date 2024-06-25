import styled from "styled-components";
import React from "react";

type InputProps = {
  name: string;
  value: number;
  onChangeHandle: React.ChangeEventHandler;
};

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputButton = styled.input`
  padding: 0.5rem;
  @media (max-width: 1100px) and (min-width: 600px) {
    font-size: 24px;
  }
`;

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
