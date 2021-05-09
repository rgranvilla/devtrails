import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};
`;

export const ContentWrapper = styled.div`
  max-width: 78rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialContainer = styled.div`
  max-width: 25rem;
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 1.5rem 0;

  a {
    svg {
      height: 2.5rem;
      width: 2.5rem;

      color: ${props => props.theme.colors.spanishGray};
      transition: all ease-in-out 0.3s;
    }
  }

  & a:hover {
    svg {
      color: ${props => props.theme.colors.ecru};
    }
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.spanishGray};
  font-family: raleway, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  font-variant-numeric: proportional-nums;
  font-feature-settings: 'lnum';
  padding-bottom: 1rem;
  text-align: justify;
`;
