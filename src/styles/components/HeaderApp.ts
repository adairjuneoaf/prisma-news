import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 5rem;

  background: var(--gray-900);
  border-bottom: 1px solid var(--gray-800);

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: calc(100vw - 15rem);
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: row;

  justify-content: space-between;
  gap: 3rem;

  .imgLogo {
    flex: 1;
  }
  .menuNavigationApp {
    flex: 10;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 2rem;

    height: 100%;

    a {
      height: 100%;
      padding: 0 0.5rem;
      line-height: 5rem;

      position: relative;
      display: inline-block;

      cursor: pointer;

      color: var(--gray-300);

      transition: color 0.3s;

      &:hover {
        color: var(--white);
      }

      &.active {
        font-weight: 700;
        color: var(--white);
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;

        background: var(--yellow-500);
      }
    }
  }

  .buttonSingIn {
    flex: 1;
  }
`;
