import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: ${props => props.theme.colors.radialGradientRaisinBlack};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  max-width: 78rem;
  width: 100%;

  display: grid;
  grid-template-columns: 2.5rem auto 2.5rem;
  grid-template-rows: 30% 17.5rem auto;

  img {
    grid-row: 3/4;
    grid-column: 2/3;

    justify-self: center;
    align-self: flex-end;

    transform: translateY(70%);

    height: fit-content;
  }
`;

export const Wrapper = styled.div`
  max-width: 78rem;
  width: 100%;

  grid-row: 2/3;
  grid-column: 2/3;

  justify-self: center;

  font-family: Raleway, sans-serif;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4.275rem;
    color: ${props => props.theme.colors.gainsboro};
  }
`;

export const HiWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  p {
    white-space: nowrap;
    width: max-content;
    font-size: 1.875rem;
  }
`;

export const HorizontalBar = styled.div`
  margin-left: 1rem;
  height: 4px;
  width: 100%;
  background: ${props => props.theme.colors.jasmine};
`;

export const SubTitle = styled.p`
  width: 60%;
  text-align: end;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.jasmine};
`;

export const SocialMediaWrapper = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  a {
    .socialIcon {
      width: 2.5rem;
      height: 2.5rem;

      color: ${props => props.theme.colors.onyx100};
      transition: all ease-in-out 0.3s;
    }
  }

  & a:hover {
    .socialIcon {
      color: ${props => props.theme.colors.ecru};
    }
  }
`;

export const BottomRightContainer = styled.div`
  grid-row: 3/4;
  grid-column: 3/4;

  justify-self: center;

  .textDecoratorWrapper {
    width: max-content;
    height: max-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.85rem;

    transform: rotate(90deg) translate(47%, 0);
    p {
      font-size: 1rem;
      font-family: raleway;
      line-height: 1.2rem;
      text-transform: uppercase;
    }

    div {
      width: 3.5rem;
      height: 0.05rem;
      background: ${props => props.theme.colors.onyx100};
    }
  }
`;
