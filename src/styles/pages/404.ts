import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  width: calc(100vw - 15rem);
  height: calc(100vh - 8rem);

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: default;

  h1 {
    font-size: 12rem;
    font-weight: 900;
    line-height: 10rem;
    color: var(--gray-800);
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--gray-800);
    text-transform: uppercase;
  }

  a {
    font-size: 1.5rem;
    line-height: 5rem;

    transition: color 0.3s;

    &:hover {
      color: var(--yellow-500);
    }
  }
`;
