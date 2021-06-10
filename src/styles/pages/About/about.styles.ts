import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;

  position: relative;

  .portrait {
    .portraitCircle {
      display: block;
      margin: 1rem auto;
      height: 240px;
    }

    .portraitBlobs {
      position: absolute;
      top: 8rem;
      right: 0;
      width: 30%;
      max-width: 432px;
    }

    @media (max-width: 880px) {
      .portraitBlobs {
        display: none;
      }
    }

    @media (min-width: 881px) {
      .portraitCircle {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .portraitCircle {
        height: 160px;
      }
    }
  }
`;

export const AboutContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-top: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .aboutMain {
    width: 86%;
    max-width: 1248px;

    display: flex;

    .aboutWrapper {
      padding: 0 1.25rem;
      width: 70%;

      .aboutContent {
        text-align: justify;

        display: flex;
        flex-direction: column;

        h1 {
          padding: 0.5rem 0;
          font-family: Raleway, sans-serif;
          text-transform: uppercase;
          font-size: 3rem;
        }

        p {
          font-family: raleway, sans-serif;
          font-size: 1.125rem;
          font-weight: 400;
          font-variant-numeric: proportional-nums;
          font-feature-settings: 'lnum';
          padding-bottom: 1rem;
          text-align: justify;
        }

        @media (max-width: 1024px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
          p {
            font-size: 0.875rem;
          }
        }
      }
      .buttonCV {
        margin: 1.25rem 0;
        border: 0;
        border-radius: 0.3125rem;
        background: ${props => props.theme.colors.radialGradientRaisinBlack};
        height: 2.5rem;
        width: 12.5rem;
        cursor: pointer;

        a {
          padding: 0 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          p {
            padding: 0;
            line-height: 2.5rem;
            vertical-align: middle;
            font-size: 1rem;
            color: ${props => props.theme.colors.ecru};
          }
          img {
            height: 1.85rem;
          }
        }

        & a:hover {
          p {
            color: ${props => props.theme.colors.jasmine};
          }
        }

        &:hover {
          transform: translate(1px, -1px);
          background: ${props => props.theme.colors.radialGradientOnyx};
        }

        &:active {
          transform: initial;
          background: ${props => props.theme.colors.radialGradientRaisinBlack};
        }
      }
    }

    @media (max-width: 880px) {
      .aboutWrapper {
        width: 100%;
      }
    }
  }

  .skillsMain {
    width: 86%;
    max-width: 1248px;

    display: flex;

    .skillsWrapper {
      padding: 0 1.25rem;
      width: 70%;

      .skillsContent {
        h1 {
          padding: 0.5rem 0;
          font-family: Raleway, sans-serif;
          text-transform: uppercase;
          font-size: 3rem;
        }

        @media (max-width: 1024px) {
          h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem;
          }
        }
      }

      @media (max-width: 1350px) {
        width: 100%;
      }

      .skillBar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.5rem;
        padding-bottom: 2rem;
      }

      .icon {
        height: 2.5rem;
        width: 2.5rem;
        color: ${props => props.theme.colors.onyx200};
      }
    }
  }
`;
