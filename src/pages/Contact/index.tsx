import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { VerticalBar, Title, Container } from '../../styles/common.styles';

import {
  ContactContainer,
  ContactWrapper,
  ContactContentContainer,
  ContentContainer,
  EmailInput,
  FormContainer,
  InputContainer,
  MessageInput,
  NameInput,
  SubjectInput,
  SubmitButton,
  SubmitButtonContainer,
  TextContainer,
  TitleContainer,
  VerticalBarContainer
} from '../../styles/pages/Contact/contact.styles';

const Contact: React.FC = () => {
  return (
    <Container>
      <ContactContentContainer>
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
              <FormContainer
                method="post"
                action="mailto:rgranvilla@gmail.com"
                encType="text/plain"
              >
                <InputContainer>
                  <NameInput placeholder="Nome" type="text" />
                  <EmailInput placeholder="E-mail" type="text" />
                  <SubjectInput placeholder="Assunto" type="text" />
                  <MessageInput placeholder="Sua mensagem..." typeof="text" />
                </InputContainer>
                <SubmitButtonContainer>
                  <SubmitButton type="submit" value="click">
                    <FiChevronRight />
                  </SubmitButton>
                </SubmitButtonContainer>
              </FormContainer>
            </ContactWrapper>
          </ContactContainer>
        </ContentContainer>
      </ContactContentContainer>
      <img
        src="./topTransiction.svg"
        alt=""
        className="transictionDecoratorTop"
      />
    </Container>
  );
};

export default Contact;
