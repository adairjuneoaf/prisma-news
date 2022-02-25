import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  width: 35%;
  height: 32rem;

  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border: 1px solid var(--gray-800);
  border-radius: 24px;

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .imageProfile {
      width: 96px;
      height: 96px;
      clip-path: circle();
    }

    .data {
      display: flex;
      align-items: center;
      flex-direction: column;

      gap: 0.5rem;

      h3 {
        color: var(--yellow-500);
      }
    }
  }

  .subscription {
    margin-top: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > h1 {
      font-size: 1.25rem;
      font-weight: 900;
      line-height: 36px;
      color: var(--gray-800);

      margin-bottom: 1rem;
    }

    span {
      display: flex;
      align-items: center;

      gap: 0.5rem;

      font-size: 0.875rem;
      font-weight: 600;
      color: var(--white);

      & + span {
        margin-top: 0.5rem;
      }

      p {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--gray-300);
      }

      .indicatorStatus {
        width: 10px;
        height: 10px;

        border-radius: 5px;

        background: white;

        &.active {
          background: green;
        }

        &.inactive {
          background: red;
        }
      }
    }
  }

  .buttonLogout {
    margin-top: 2rem;

    padding: 0.5rem 3rem;
    border-radius: 100px;
    border: 0;

    color: var(--white);
    background: #d82148;

    font-size: 1rem;
    font-weight: 700;

    transition: background-color 0.3s;

    &:hover {
      background: #80132b;
    }
  }
`;
