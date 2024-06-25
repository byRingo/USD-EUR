import styled from "styled-components";

export const CounterComponent = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
