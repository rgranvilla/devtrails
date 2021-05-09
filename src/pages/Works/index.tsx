import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { VerticalBar } from '../../styles/common.styles';

import {
  Container,
  ContentContainer,
  TitleContainer,
  TitleText,
  WorksContainer,
  WorksVerticalBar,
  LeftSideContainer,
  RightSideContainer,
  WorksWrapper,
  WorksContentWrapper,
  WorksContent
} from '../../styles/pages/Works/works.styles';

const Works: React.FC = () => {
  return (
    <>
      <Container id="works">
        <VerticalBar />
        <ContentContainer>
          <TitleContainer>
            <TitleText>Trabalhos</TitleText>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              quia voluptates doloremque possimus, mollitia esse nulla
              aspernatur soluta, aliquam repudiandae commodi modi at corporis
              quas beatae, totam accusantium a alias?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quis, veniam tempore atque nulla ducimus fugit reiciendis
              voluptatem quisquam accusantium nesciunt placeat ratione labore
              amet, ex voluptates reprehenderit! Iusto, aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel esse laboriosam suscipit assumenda reiciendis, porro rerum
              ratione aliquam quidem a aspernatur animi ut. Fugit suscipit quos
              ullam iusto molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              pariatur accusantium sequi voluptate aspernatur quo voluptates
              ducimus non mollitia totam commodi numquam odit ipsam recusandae
              debitis magnam, harum laboriosam ex.
            </p>
          </TitleContainer>
          <WorksContainer>
            <LeftSideContainer>
              <FiChevronLeft />
            </LeftSideContainer>
            <WorksWrapper>
              <WorksVerticalBar />
              <WorksContentWrapper>
                <WorksContent>
                  <h1>Grade de trabalhos</h1>
                </WorksContent>
              </WorksContentWrapper>
              <WorksVerticalBar />
            </WorksWrapper>
            <RightSideContainer>
              <FiChevronRight />
            </RightSideContainer>
          </WorksContainer>
        </ContentContainer>
      </Container>
      <img src="./topTransiction.svg" />
    </>
  );
};

export default Works;
