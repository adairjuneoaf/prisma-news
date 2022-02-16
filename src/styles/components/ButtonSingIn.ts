import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  padding: 0.75rem 1rem;

  color: var(--white);
  background: var(--blue-950);

  border-radius: 100px;

  border: 0;

  font-size: 1rem;
  font-weight: 700;

  transition: background-color 0.3s;

  &:hover {
    background: var(--blue-800);
  }
`;
