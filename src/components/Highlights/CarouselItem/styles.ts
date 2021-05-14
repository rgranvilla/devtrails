import styled from 'styled-components';

export const Container = styled.div``;

export const ContentContainer = styled.div`
  .disabled {
    display: none;
  }
`;

export const CarouselContent = styled.div`
  width: 64rem;

  min-height: 90vh;
  height: 100%;

  display: grid;
  grid-row: 4rem 33.75rem auto;

  .title {
    white-space: nowrap;
    grid-row: 1/2;

    h1 {
      font-size: 4rem;
      font-family: RobotoSlab;
      font-weight: 500;
      font-variant-caps: all-small-caps;

      text-align: center;

      color: ${props => props.theme.colors.ecru};
    }

    h2 {
      font-size: 2rem;
      font-family: Raleway;
      font-weight: 200;
      /* font-variant: small-caps; */

      text-align: center;

      color: ${props => props.theme.colors.ecru};
    }
  }

  .center {
    grid-row: 2/3;

    img {
      justify-self: center;
      height: 33.75rem;
      max-width: 40rem;

      object-fit: contain;
    }
  }

  .aboutWork {
    padding-top: 2rem;
    grid-row: 3/4;

    justify-self: center;

    .description {
      height: 6rem;
      max-width: 40rem;
      text-align: center;

      p {
        font-family: Raleway, sans-serif;
        font-size: 1.125rem;
        font-weight: 200;
        font-variant-numeric: proportional-nums;
        font-feature-settings: 'lnum';
        padding-bottom: 1rem;
        text-align: justify;
      }
    }

    div {
      margin-top: 0.5rem;

      display: flex;
      justify-content: center;
      align-items: center;

      .link {
        width: 7.5rem;
        height: 2rem;

        justify-self: center;

        border-radius: 0.25rem;

        background: ${props => props.theme.colors.onyx100};

        a {
          font-size: 1.125rem;
          font-weight: 600;
          color: ${props => props.theme.colors.silver};
          text-decoration: none;
          cursor: pointer;
        }

        &:hover {
          transform: translate(0, -0.0625rem);
        }
      }
    }
  }
`;
