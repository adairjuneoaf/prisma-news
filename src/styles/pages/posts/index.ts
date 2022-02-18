import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: auto;
`;

export const Content = styled.section`
  width: calc(100vw - 15rem);
  height: 100%;

  margin: 0 auto;
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  article {
    width: 70%;
    margin: 0 auto;

    &:first-child {
      margin-top: 4rem;
    }

    section {
      time,
      cite {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.625rem;
        color: var(--gray-300);
      }
      margin-bottom: 1rem;
    }

    aside {
      a {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--white);
        line-height: 2.125rem;

        transition: color 0.3s;

        &:hover {
          color: var(--yellow-500);
        }
      }

      p {
        margin-top: 0.5rem;

        font-size: 1rem;
        line-height: 1.625rem;
        color: var(--gray-300);
      }
    }
  }

  .dividerArticles {
    width: 70%;
    height: 2px;

    margin: 0 auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    background: var(--gray-800);
  }
`;
