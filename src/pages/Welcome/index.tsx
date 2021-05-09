import React from 'react';
import Header from '../../components/Header';
import {
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiYoutube
} from 'react-icons/si';

import {
  Container,
  HiWapper,
  HorizontalBar,
  IconsWrapper,
  Main,
  SocialMediaWrapper,
  SubTitle,
  Wrapper,
  BottomRightContainer
} from '../../styles/pages/Welcome/welcome.styles';

const Welcome: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Wrapper>
            <HiWapper>
              <p>Olá, sou</p>
              <HorizontalBar />
            </HiWapper>
            <h1>Ricardo Granvilla</h1>
            <SubTitle>Desenvolvedor</SubTitle>
            <SubTitle>Frontend</SubTitle>
          </Wrapper>

          <SocialMediaWrapper>
            <IconsWrapper>
              <a href="">
                <SiGithub className="socialIcon" />
              </a>
              <a href="">
                <SiInstagram className="socialIcon" />
              </a>
              <a href="">
                <SiTwitter className="socialIcon" />
              </a>
              <a href="">
                <SiLinkedin className="socialIcon" />
              </a>
              <a href="">
                <SiYoutube className="socialIcon" />
              </a>
            </IconsWrapper>
          </SocialMediaWrapper>
          <img src="./scroll.svg" />
          <BottomRightContainer>
            <div className="textDecoratorWrapper">
              <p>Nosso primeiro contato</p>
              <div />
            </div>
          </BottomRightContainer>
        </Main>
      </Container>
      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Welcome;
