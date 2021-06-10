import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  height: 100%;
  width: 100%;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};
`;

export const Main = styled.div`
  width: 86%;
  max-width: 1248px;
  margin: 0 auto;

  height: 100vh;

  display: grid;
  grid-template-columns: 48px auto 48px;
  grid-template-rows: 25% 25% 35% 10%;

  .welcomeContainer {
    max-width: 672px;

    grid-row: 2/3;
    grid-column: 2/3;

    justify-self: center;

    font-family: Raleway, sans-serif;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    align-items: center;

    .welcomeText {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        width: max-content;
        font-size: 1.875rem;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }

  h1 {
    font-size: 4rem;
    color: ${props => props.theme.colors.gainsboro};
  }

  h2 {
    &:first-of-type {
      padding-top: 1.5rem;
    }
    width: 100%;
    text-align: end;
    font-size: 2rem;
    color: ${props => props.theme.colors.jasmine};
  }

  .socialNavContainer {
    grid-row: 3/4;
    grid-column: 1/2;

    .socialWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
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
    grid-row: 4/5;
    grid-column: 2/3;

    justify-self: center;
    align-self: flex-end;

    height: fit-content;

    img {
      height: 3.5rem;
      width: 3.5rem;
    }
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

  @media (min-width: 1440px) {
    max-width: 1248px;
  }

  @media (max-width: 880px) {
    .welcomeContainer {
      max-width: 500px;

      .welcomeText {
        p {
          font-size: 1.5rem;
        }
      }
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 690px) {
    .welcomeContainer {
      .welcomeText {
        p {
          font-weight: 600;
          font-size: 1.25rem;
        }
      }
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 585px) {
    .welcomeContainer {
      max-width: 333px;
    }

    h1 {
      font-size: 1.875rem;
    }
    h2 {
      font-size: 1.25rem;
    }

    .socialNavContainer {
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
    .verticalTextContainer {
      p {
        font-size: 0.875rem;
      }
    }
  }

  @media (max-width: 480px) {
    .welcomeContainer {
      max-width: 208px;

      .welcomeText {
        p {
          font-size: 0.75rem;
        }
      }
    }

    h1 {
      font-size: 1.0625rem;
    }

    h2 {
      font-weight: 500;
      font-size: 0.75rem;
    }

    .socialNavContainer {
      .socialWrapper {
        gap: 1rem;

        a {
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }

    .scrollDecoration {
      img {
        height: 3rem;
        width: 3rem;
      }
    }

    .verticalTextContainer {
      p {
        font-size: 0.75rem;
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
