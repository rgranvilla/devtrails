import React from 'react';

import {
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from 'react-icons/si';

import {
  Container,
  HorizontalBar,
  IconsWrapper,
  Main,
  SocialContainer,
  SubTitle,
  BottomRightContainer,
  BottonImg,
  TitleTextWelcome,
  TextWelcomeContainer,
  TextWelcome,
  WelcomeContainer,
  TextVerticalContainer,
  TextVertical,
  VerticalBarDecorator
} from '../../styles/pages/Welcome/welcome.styles';

import Header from '../../components/Header';

const Welcome: React.FC = () => {
  return (
    <>
      <Container id="home">
        <Header />

        <Main>
          <WelcomeContainer>
            <TextWelcomeContainer>
              <TextWelcome>Olá, sou</TextWelcome>
              <HorizontalBar />
            </TextWelcomeContainer>

            <TitleTextWelcome>Ricardo Granvilla</TitleTextWelcome>

            <SubTitle>Desenvolvedor</SubTitle>
            <SubTitle>Frontend</SubTitle>
          </WelcomeContainer>

          <SocialContainer>
            <IconsWrapper>
              <a
                href="https://github.com/rgranvilla"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-granvilla-053a8121/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://twitter.com/rgranvilla"
                target="_blank"
                rel="noreferrer"
              >
                <SiTwitter />
              </a>
              <a
                href="https://www.instagram.com/rgranvilla/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCuZDjkqxfnobmOWh3E0TdKA"
                target="_blank"
                rel="noreferrer"
              >
                <SiYoutube />
              </a>
            </IconsWrapper>
          </SocialContainer>

          <BottonImg src="./scroll.svg" />

          <BottomRightContainer>
            <TextVerticalContainer>
              <TextVertical>Nosso primeiro contato</TextVertical>
              <VerticalBarDecorator />
            </TextVerticalContainer>
          </BottomRightContainer>
        </Main>
      </Container>

      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Welcome;
