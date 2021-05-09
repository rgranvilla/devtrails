import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
`;

export const VerticalBarContainer = styled.div``;

export const VerticalBar = styled.div`
  margin-right: 1.25rem;
  height: 22.5rem;
  width: 0.125rem;
  background: ${props => props.theme.colors.silver};
`;

export const ContentContainer = styled.div`
  max-width: 78rem;
  width: 100%;

  padding-bottom: 5rem;

  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  padding-bottom: 2rem;

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
  padding: 0.25rem 0;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const ContactContainer = styled.div`
  max-width: 78rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContainer = styled.div``;

export const Text = styled.p`
  font-family: raleway, sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  font-variant-numeric: proportional-nums;
  font-feature-settings: 'lnum';
  padding-bottom: 1rem;
  text-align: justify;
`;

export const FormContainer = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;

  input::placeholder {
    font-family: Raleway, sans-serif;
  }

  textarea::placeholder {
    font-family: Raleway, sans-serif;
  }

  input:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.spanishGray};
    color: ${props => props.theme.colors.onyx200};
    background: ${props => props.theme.colors.silver};
  }
  textarea:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.spanishGray};
    color: ${props => props.theme.colors.onyx200};
    background: ${props => props.theme.colors.silver};
  }
`;

export const NameInput = styled.input`
  height: 2.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;

  border-radius: 0.5rem;
  border: 0;

  background: ${props => props.theme.colors.lightGray};
`;

export const EmailInput = styled.input`
  height: 2.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;

  border: 0;
  border-radius: 0.5rem;

  background: ${props => props.theme.colors.lightGray};
`;

export const MessageInput = styled.textarea`
  height: 10rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  resize: none;

  border-radius: 0.5rem;
  border: 0;

  background: ${props => props.theme.colors.lightGray};
`;

export const SubmitButtonContainer = styled.div`
  width: 8%;
  height: 100%;
`;

export const SubmitButton = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  color: ${props => props.theme.colors.ecru};
  background: ${props => props.theme.colors.radialGradientRaisinBlack};

  cursor: pointer;

  svg {
    height: 3rem;
    width: 3rem;
    transition: all ease-in-out 0.3s;
  }

  &:hover {
    color: ${props => props.theme.colors.jasmine};
    background: ${props => props.theme.colors.radialGradientOnyx};
    transform: translate(0.125rem, 0);
  }
`;
