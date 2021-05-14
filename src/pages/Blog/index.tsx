import React from 'react';

import { HorizontalBar, Title } from '../../styles/common.styles';

import {
  BlogContainer,
  BlogWarpper,
  Container
} from '../../styles/pages/Blog/blog.styles';
import { ContentContainer } from '../../styles/pages/Works/works.styles';

const Blog: React.FC = () => {
  return (
    <>
      <Container id="blog">
        <ContentContainer>
          <Title>Blog</Title>
          <HorizontalBar />
          <BlogContainer>
            <BlogWarpper>
              <h1>Olá eu sou o blog</h1>
            </BlogWarpper>
          </BlogContainer>
          <HorizontalBar />
        </ContentContainer>
      </Container>
      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Blog;
