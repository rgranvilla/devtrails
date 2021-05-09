import React from 'react';
import {
  BlogContainer,
  BlogWarpper,
  Container,
  TitleContainer,
  TitleText,
  VerticalBar,
  VerticalBarContainer
} from '../../styles/pages/Blog/blog.styles';
import { ContentContainer } from '../../styles/pages/Works/works.styles';

const Blog: React.FC = () => {
  return (
    <>
      <Container>
        <VerticalBarContainer>
          <VerticalBar />
        </VerticalBarContainer>
        <ContentContainer>
          <TitleContainer>
            <TitleText>Blog</TitleText>
          </TitleContainer>
          <BlogContainer>
            <BlogWarpper>
              <h1>Olá eu sou o blog</h1>
            </BlogWarpper>
          </BlogContainer>
        </ContentContainer>
      </Container>
      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Blog;
