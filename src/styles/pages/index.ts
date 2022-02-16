import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: auto;
`;

export const Content = styled.section`
  width: calc(100vw - 15rem);
  height: calc(100vh - 8rem);

  margin: 0 auto;
  margin-top: 8rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  aside {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--gray-100);
    }

    h1 {
      font-size: 4.5rem;
      font-weight: 900;
      color: var(--white);
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--gray-100);
      line-height: 1.5;

      .highlightInformation {
        font-weight: 900;
        color: var(--cyan-500);
      }
    }
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;
    width: 80%;
    height: 80%;
  }
`;
