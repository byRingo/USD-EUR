import styled from "styled-components";

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputButton = styled.input`
  padding: 0.5rem;
  @media (max-width: 1100px) and (min-width: 600px) {
    font-size: 24px;
  }
`;
