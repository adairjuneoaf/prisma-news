import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1.125rem 3rem;

  color: var(--gray-900);
  background: var(--yellow-500);

  border-radius: 100px;

  border: 0;

  font-size: 1.125rem;
  font-weight: 700;

  transition: background-color 0.3s;

  &:hover {
    background: var(--yellow-300);
  }
`;
