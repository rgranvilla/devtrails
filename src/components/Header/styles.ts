import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  padding-top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .navbar {
    min-width: 78rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .menu {
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 4.5rem;
  }
  a {
    transition: all ease-in-out 0.3s;
  }

  & a:hover {
    filter: invert(70%) sepia(15%) saturate(527%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
  }
`;

export const Menu = styled.div`
  width: 27.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;

  a {
    color: ${props => props.theme.colors.davysGray};
    font-family: Raleway, sans-serif;
    font-weight: 500;
    font-size: 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: all ease-in 0.3s;
  }

  & a:hover {
    color: ${props => props.theme.colors.ecru};
    border-bottom: 1px solid ${props => props.theme.colors.ecru};
  }
`;
