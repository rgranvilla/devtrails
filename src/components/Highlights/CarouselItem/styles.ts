import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;

  .main {
    width: 100%;
    max-width: 1248px;

    display: flex;
    justify-content: center;

    .disabled {
      display: none;
    }

    .carouselContent {
      width: 100%;
      height: calc(100vh - 128px);

      display: grid;
      grid-row: 1fr 1fr 1fr;

      .title {
        padding-top: 1rem;
        white-space: nowrap;
        grid-row: 1/2;

        h1 {
          font-size: 3rem;
          font-family: Raleway;
          font-weight: 500;
          font-variant-caps: all-small-caps;

          text-align: center;

          color: ${props => props.theme.colors.ecru};
        }

        h2 {
          font-size: 1.5rem;
          font-family: Raleway;
          font-weight: 200;
          font-variant-caps: all-small-caps;

          text-align: center;

          color: ${props => props.theme.colors.ecru};
        }
      }

      .center {
        grid-row: 2/3;

        display: flex;
        justify-content: center;
        align-items: center;

        .imageContainer {
          height: 70vh;
          max-height: 480px;
          width: 70vw;
          max-width: 640px;

          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 100%;
            width: 100%;

            object-fit: contain;
          }
        }
      }

      .aboutWork {
        grid-row: 3/4;

        justify-self: center;

        .description {
          height: 64px;
          max-width: 640px;
          text-align: center;

          p {
            font-family: Raleway, sans-serif;
            font-size: 1.125rem;
            font-weight: 300;
            font-variant-numeric: proportional-nums;
            font-feature-settings: 'lnum';
            padding-bottom: 1rem;
            text-align: justify;
            color: ${props => props.theme.colors.white};
          }
        }

        .linkContainer {
          display: flex;
          justify-content: center;
          align-items: center;

          .link {
            width: 7.5rem;
            height: 2rem;
            border-radius: 0.25rem;

            background: ${props => props.theme.colors.onyx100};

            display: flex;
            justify-content: center;
            align-items: center;

            a {
              display: block;
              font-size: 1rem;
              font-weight: 600;
              color: ${props => props.theme.colors.silver};
            }

            &:hover {
              transform: translate(0, -0.0625rem);
            }
          }
        }
      }
    }
  }
`;
