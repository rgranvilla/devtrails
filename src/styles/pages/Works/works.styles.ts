import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  padding-bottom: 5rem;

  display: flex;
  justify-content: center;
`;

export const VerticalBar = styled.div`
  margin-right: 1.25rem;
  height: 22.5rem;
  width: 0.25rem;
  background: ${props => props.theme.colors.onyx200};
`;

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

export const WorksContainer = styled.div`
  max-width: 78rem;
  width: 100%;
  display: flex;
`;

export const LeftSideContainer = styled.div`
  align-self: center;
  transform: translate(0.6rem);

  svg {
    height: 3rem;
    width: 3rem;
    color: ${props => props.theme.colors.davysGray};
  }

  svg:hover {
    color: ${props => props.theme.colors.ecru};
  }
`;

export const WorksWrapper = styled.div`
  height: 40rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.colors.lightGray};
`;

export const WorksContentWrapper = styled.div`
  height: 100%;
  width: 100%;

  border-top: 2px solid ${props => props.theme.colors.davysGray};
  border-bottom: 2px solid ${props => props.theme.colors.davysGray};

  border-left: 3px solid ${props => props.theme.colors.davysGray}80;
  border-right: 3px solid ${props => props.theme.colors.davysGray}80;
`;

export const RightSideContainer = styled.div`
  align-self: center;
  transform: translate(-0.6rem);

  svg {
    height: 3rem;
    width: 3rem;
    color: ${props => props.theme.colors.davysGray};
  }

  svg:hover {
    color: ${props => props.theme.colors.ecru};
  }
`;

export const WorksVerticalBar = styled.div`
  height: 40.5rem;
  width: 0.5rem;
  background: ${props => props.theme.colors.davysGray};
`;

export const WorksContent = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
