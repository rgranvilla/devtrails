import styled from 'styled-components';

type menuProps = {
  open: boolean;
};

export const Container = styled.header`
  width: 100%;

  padding-top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .navbar {
    min-width: 86%;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logoImage {
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
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const NavMenu = styled.div<menuProps>`
  max-width: 640px;
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;

  scroll-behavior: smooth;

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

  @media (max-width: 880px) {
    z-index: 0;
    flex-flow: column nowrap;
    background: ${props => props.theme.colors.onyx200};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    padding-top: 6rem;
    align-items: center;
    padding-bottom: 60%;
    a {
      color: ${props => props.theme.colors.white};
    }
  }
`;

export const StyledBurger = styled.div<menuProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 1rem;
    background: ${({ open }) =>
      open
        ? props => props.theme.colors.white
        : props => props.theme.colors.davysGray};
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 881px) {
    display: none;
  }
`;
