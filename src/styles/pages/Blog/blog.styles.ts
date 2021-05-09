import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};
`;

export const VerticalBarContainer = styled.div``;

export const ContentContainer = styled.div`
  max-width: 78rem;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  padding-bottom: 5rem;

  p {
    font-family: raleway, sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    font-variant-numeric: proportional-nums;
    font-feature-settings: 'lnum';
    padding-bottom: 1rem;
    text-align: justify;
  }
`;

export const TitleText = styled.h1`
  padding: 0.25rem 0 3.5rem 0;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const BlogContainer = styled.div`
  max-width: 78rem;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlogWarpper = styled.div``;

export const VerticalBar = styled.div`
  margin-right: 1.25rem;
  height: 22.5rem;
  width: 0.25rem;
  background: ${props => props.theme.colors.onyx200};
`;
