import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: auto;
`;

export const Content = styled.article`
  width: calc(100vw - 25%);
  height: 100%;

  margin: 0 auto;
  margin-top: 12rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: 3.375rem;
    font-weight: 900;
    line-height: 60px;

    text-align: justify;
    color: var(--white);
  }

  > section {
    padding: 1.5rem 0 2rem 0;
    color: var(--gray-300);
  }

  aside {
    p {
      font-size: 1.125rem;
      line-height: 30px;
      font-weight: 400;

      color: var(--gray-100);
    }

    strong {
      color: var(--yellow-500);
    }

    h2,
    h3,
    h4,
    h5 {
      padding: 2.5rem 0 1.5rem 0;

      color: var(--white);
    }
  }
`;
