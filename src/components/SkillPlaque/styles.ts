import styled from 'styled-components';

export const Container = styled.div`
  height: 3.5rem;
  padding-left: 0.5rem;
  width: 12rem;
  flex-grow: 1;
  border-radius: 0.25rem;
  border: 1px solid ${props => props.theme.colors.onyx200};

  background: ${props => props.theme.colors.linearGradientSpanishGray};

  div {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  svg {
    height: 2.1875rem;
    width: 2.1875rem;
    fill: ${props => props.theme.colors.onyx200};
  }

  p {
    width: 100%;
    font-family: roboto, sans-serif;
    font-size: 1.125rem;
    text-align: center;
    color: ${props => props.theme.colors.onyx200};
  }

  @media (max-width: 640px) {
    height: 2.5rem;
    width: 7rem;
    padding-left: 0.125rem;
    flex-grow: 1;
    border-radius: 0.25rem;
    border: 1px solid ${props => props.theme.colors.onyx200};

    background: ${props => props.theme.colors.linearGradientSpanishGray};

    div {
      height: 100%;
      width: 100%;

      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
      fill: ${props => props.theme.colors.onyx200};
    }

    p {
      width: 100%;
      font-family: roboto, sans-serif;
      font-size: 0.875rem;
      text-align: center;
      color: ${props => props.theme.colors.onyx200};
    }
  }
`;
