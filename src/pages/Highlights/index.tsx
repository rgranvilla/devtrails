import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { HorizontalBar } from '../../styles/common.styles';

import {
  Container,
  ContentContainer,
  ContentWrapper
} from '../../styles/pages/Highlights/highlights.styles';

const Highlights: React.FC = () => {
  return (
    <>
      <Container id="highlights">
        <ContentContainer>
          <div className="header">
            <HorizontalBar />
          </div>
          <ContentWrapper>
            <div className="leftSide">
              <FiChevronLeft />
            </div>
            <h1>GoBarber - Haircuts &amp; Shaves</h1>
            <div className="center">
              <img src="./GoBarber.svg" alt="" />
            </div>
            <div className="rightSide">
              <FiChevronRight />
            </div>
            <div className="worksSelector">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
            </div>
          </ContentWrapper>
          <div className="footer">
            <HorizontalBar />
          </div>
        </ContentContainer>
      </Container>
      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Highlights;
