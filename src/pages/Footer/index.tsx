import React from 'react';
import {
  SiGithub,
  // SiInstagram,
  SiLinkedin,
  SiTwitter
  // SiYoutube
} from 'react-icons/si';
import {
  Container,
  ContentWrapper,
  SocialContainer,
  Text
} from '../../styles/pages/Footer/footer.styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <SocialContainer>
          <a
            href="https://github.com/rgranvilla"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
          {/* <a
            href="https://www.instagram.com/rgranvilla/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </a> */}
          <a
            href="https://twitter.com/rgranvilla"
            target="_blank"
            rel="noreferrer"
          >
            <SiTwitter />
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UCuZDjkqxfnobmOWh3E0TdKA"
            target="_blank"
            rel="noreferrer"
          >
            <SiYoutube />
          </a> */}
          <a
            href="https://www.linkedin.com/in/ricardo-granvilla-053a8121/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </SocialContainer>
        <Text>© Copyright 2021 - by Ricardo Granvilla</Text>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
