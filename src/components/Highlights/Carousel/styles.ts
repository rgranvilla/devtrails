import styled from 'styled-components';

export const HighlightContainer = styled.div`
  width: 100%;
  height: calc(100vh);

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};

  .carouselContent {
    width: 86%;
    max-width: 1248px;

    display: flex;
    justify-content: space-between;

    .leftSide,
    .rightSide {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        height: 3rem;
        width: 3rem;

        color: ${props => props.theme.colors.davysGray};
      }

      svg:hover {
        color: ${props => props.theme.colors.ecru};
      }
    }

    .center {
      width: 100%;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      .leftSide,
      .rightSide {
        svg {
          height: 2.5rem;
          width: 2.5rem;
        }
      }
    }
  }
`;

export const Selectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .SelectorsContainer {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
    width: 10rem;
  }
  .circle {
    height: 1rem;
    width: 1rem;

    border-radius: 50%;

    background: ${props => props.theme.colors.davysGray};
  }

  .circleActived {
    height: 1rem;
    width: 1rem;

    border-radius: 50%;

    background: ${props => props.theme.colors.jasmine};
  }

  .circle:hover {
    background: ${props => props.theme.colors.spanishGray};
  }
`;
