import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { VerticalBar, Title } from '../../styles/common.styles';

import {
  ContactContainer,
  ContactWrapper,
  Container,
  ContentContainer,
  EmailInput,
  FormContainer,
  InputContainer,
  MessageInput,
  NameInput,
  SubmitButton,
  SubmitButtonContainer,
  TextContainer,
  TitleContainer,
  VerticalBarContainer
} from '../../styles/pages/Contact/contact.styles';

const Contact: React.FC = () => {
  return (
    <>
      <Container id="contact">
        <VerticalBarContainer>
          <VerticalBar />
        </VerticalBarContainer>
        <ContentContainer>
          <TitleContainer>
            <Title>Contato</Title>
          </TitleContainer>
          <ContactContainer>
            <ContactWrapper>
              <TextContainer>
                <p>Tem alguma pergunta ou trabalho que gostaria de fazer?</p>
              </TextContainer>
              <FormContainer>
                <InputContainer>
                  <NameInput placeholder="Nome" />
                  <EmailInput placeholder="E-mail" />
                  <MessageInput placeholder="Sua mensagem..." />
                </InputContainer>
                <SubmitButtonContainer>
                  <SubmitButton type="submit">
                    <FiChevronRight />
                  </SubmitButton>
                </SubmitButtonContainer>
              </FormContainer>
            </ContactWrapper>
          </ContactContainer>
        </ContentContainer>
      </Container>
      <img src="./topTransiction.svg" alt="" />
    </>
  );
};

export default Contact;
