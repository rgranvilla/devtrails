import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  .transictionDecoratorTop {
    width: 100%;
    height: fit-content;
    object-fit: cover;
    transform: translateY(5px);
  }
  .transictionDecoratorBottom {
    width: 100%;
    height: fit-content;
    object-fit: cover;
  }
`;

export const VerticalBar = styled.div`
  height: 15rem;
  width: 0.125rem;
  background: ${props => props.theme.colors.davysGray};
`;

export const HorizontalBar = styled.div`
  height: 0.125rem;
  width: 100%;
  background: ${props => props.theme.colors.davysGray};
`;

export const Title = styled.h1`
  padding: 0.25rem 0 3.5rem 0;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const GeneralText = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  font-variant-numeric: proportional-nums;
  font-feature-settings: 'lnum';
  padding-bottom: 1rem;
  text-align: justify;
`;
