import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};
`;

export const ContentContainer = styled.div`
  max-width: 78rem;
  width: 100%;

  .header {
    padding-top: 2.5rem;
  }

  .footer {
    padding-bottom: 2.5rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 4rem auto 4rem;
  grid-template-rows: 10rem auto 10rem;

  h1 {
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: center;
    align-self: center;
    font-size: 4rem;
    font-family: RobotoSlab;
    font-weight: 500;
    font-variant: small-caps;
    color: ${props => props.theme.colors.ecru};
  }

  .leftSide {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: center;

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
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: center;
    justify-self: center;
  }

  .rightSide {
    grid-column: 3/4;
    grid-row: 2/3;
    align-self: center;
    justify-self: center;

    svg {
      height: 3rem;
      width: 3rem;
      color: ${props => props.theme.colors.davysGray};
    }

    svg:hover {
      color: ${props => props.theme.colors.ecru};
    }
  }

  .worksSelector {
    grid-column: 2/3;
    grid-row: 3/4;

    justify-self: center;
    align-self: flex-end;

    padding-bottom: 2.5rem;

    display: flex;
    gap: 1.25rem;

    .circle {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background: ${props => props.theme.colors.davysGray};
    }

    .circle :first-child {
      background: ${props => props.theme.colors.ecru};
    }
    .circle:hover {
      background: ${props => props.theme.colors.jasmine};
    }
  }
`;
