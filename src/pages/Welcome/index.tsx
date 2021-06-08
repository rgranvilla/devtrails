import React from 'react';

import {
  SiGithub,
  // SiInstagram,
  SiTwitter,
  SiLinkedin
  // SiYoutube
} from 'react-icons/si';

import {
  Container,
  HorizontalBar,
  Main,
  VerticalBarDecorator
} from '../../styles/pages/Welcome/welcome.styles';

import Header from '../../components/Header';

const Welcome: React.FC = () => {
  return (
    <>
      <Container id="home">
        <Header />

        <Main>
          <div className="welcomeContainer">
            <div className="welcomeText">
              <p>Olá, sou</p>
              <HorizontalBar />
            </div>

            <h1>Ricardo Granvilla</h1>

            <h2>Desenvolvedor</h2>
            <h2>Fullstack</h2>
          </div>

          <div className="socialNavContainer">
            <div className="socialWrapper">
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
              {/* <a
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
              </a> */}
            </div>
          </div>

          <div className="scrollDecoration">
            <img src="./scroll.svg" />
          </div>

          <div className="bottomRightContainer">
            <div className="verticalTextContainer">
              <p>Nosso primeiro contato</p>
              <VerticalBarDecorator />
            </div>
          </div>
        </Main>
      </Container>

      <img src="./bottomTransiction.svg" className="bottomTransiction" />
    </>
  );
};

export default Welcome;
