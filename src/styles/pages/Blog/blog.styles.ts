import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 5rem;

  display: flex;
  justify-content: center;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};
`;

export const ContentContainer = styled.div`
  max-width: 78rem;
  width: 100%;

  display: flex;
  flex-direction: column;
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
