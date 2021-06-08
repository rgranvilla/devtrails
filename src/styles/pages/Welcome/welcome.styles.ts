import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  max-width: 1248px;
  width: 100%;

  display: grid;
  grid-template-columns: 2.5rem auto 2.5rem;
  grid-template-rows: 30% 17.5rem 70%;

  .welcomeContainer {
    max-width: 78rem;
    width: 100%;

    grid-row: 2/3;
    grid-column: 2/3;

    justify-self: center;

    font-family: Raleway, sans-serif;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;

    .welcomeText {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;

      p {
        white-space: nowrap;
        width: max-content;
        font-size: 1.875rem;
      }
    }
  }

  h1 {
    font-size: 4.275rem;
    color: ${props => props.theme.colors.gainsboro};
  }

  h2 {
    width: 60%;
    text-align: end;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.jasmine};
  }

  .socialNavContainer {
    grid-row: 3/4;
    grid-column: 1/2;

    .socialWrapper {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      a {
        svg {
          width: 2.5rem;
          height: 2.5rem;

          color: ${props => props.theme.colors.onyx100};
          transition: all ease-in-out 0.3s;
        }
      }

      & a:hover {
        svg {
          color: ${props => props.theme.colors.ecru};
        }
      }
    }
  }

  .scrollDecoration {
    grid-row: 3/4;
    grid-column: 2/3;

    justify-self: center;
    align-self: flex-end;

    transform: translateY(70%);

    height: fit-content;
  }

  .bottomRightContainer {
    grid-row: 3/4;
    grid-column: 3/4;

    justify-self: center;
  }

  .verticalTextContainer {
    width: max-content;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.85rem;

    transform: rotate(90deg) translate(47%, 0);

    p {
      font-size: 1rem;
      font-family: raleway;
      line-height: 1.2rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 480px) {
    max-width: 480px;
    height: calc(100vh - 72px);

    display: grid;
    grid-template-columns: 56px auto 56px;
    grid-template-rows: 20% 160px 40% 10%;

    .welcomeContainer {
      .welcomeText {
        width: 100%;
        p {
          font-weight: 600;
          font-size: 1.125rem;
        }
      }
    }

    h1 {
      font-size: 1.5rem;
      padding-top: 1.5rem;
    }

    h2 {
      width: 100%;
      font-size: 1rem;

      &:first-of-type {
        padding-top: 2rem;
      }
    }

    .socialNavContainer {
      justify-self: right;

      .socialWrapper {
        gap: 1rem;

        a {
          svg {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }

    .scrollDecoration {
      grid-row: 4/5;
      grid-column: 2/3;

      transform: translateY(0);
      img {
        width: 3rem;
        height: 3rem;
      }
    }

    .verticalTextContainer {
      p {
        font-size: 0.9rem;
        line-height: 1rem;
      }
    }
  }
`;

export const HorizontalBar = styled.div`
  margin-left: 1rem;
  height: 4px;
  width: 100%;
  background: ${props => props.theme.colors.jasmine};

  @media (max-width: 480px) {
    height: 2px;
  }
`;

export const VerticalBarDecorator = styled.div`
  width: 3.5rem;
  height: 0.05rem;
  background: ${props => props.theme.colors.onyx100};

  @media (max-width: 480px) {
    height: 1px;
  }
`;
