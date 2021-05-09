import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const Portrait = styled.img`
  top: 4.25rem;
  right: 0;
  position: absolute;
  height: 58.75rem;
`;

export const AboutWrapper = styled.div`
  max-width: 78rem;
  width: 100%;

  display: flex;

  padding-bottom: 2.1875rem;

  .aboutContentWrapper {
    width: 50rem;

    h1 {
      padding: 0.25rem 0;
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
`;

export const SkillWrapper = styled.div`
  max-width: 78rem;
  width: 100%;

  display: flex;

  .skillBar {
    max-width: 50rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    padding-bottom: 2rem;
  }

  h1 {
    padding: 0.25rem 0;
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    font-size: 3rem;
  }

  .icon {
    height: 2.5rem;
    width: 2.5rem;
    color: ${props => props.theme.colors.onyx200};
  }
`;
