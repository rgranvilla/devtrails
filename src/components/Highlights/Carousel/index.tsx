import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import CarouselItem from '../CarouselItem/CarouselItem';

import { Container, CarouselContent, Selectors } from './styles';

type Work = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  link: string;
  publishedAt: string;
};

type WorksProps = {
  works: Work[];
  lenghtData: number;
};

const Carousel: React.FC<WorksProps> = ({ works, lenghtData }: WorksProps) => {
  const [selectedWork, setSelectedWork] = useState(1);

  function handleSelect(index: number) {
    setSelectedWork(index);
  }

  const hasNext = selectedWork < lenghtData;
  const hasPrev = selectedWork > 1;

  function handleNext() {
    setSelectedWork(hasNext ? selectedWork + 1 : 1);
  }

  function handlePrev() {
    setSelectedWork(hasPrev ? selectedWork - 1 : lenghtData);
  }
  return (
    <>
      <Container id="highlights">
        <CarouselContent>
          <div className="leftSide">
            <a onClick={() => handlePrev()}>
              <FiChevronLeft />
            </a>
          </div>
          <div className="center">
            {Object.values(works).map(
              ({ title, subtitle, description, thumbnail, link, id }) => {
                return (
                  <CarouselItem
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    thumbnail={thumbnail}
                    link={link}
                    isSelected={id === selectedWork}
                    key={id}
                  />
                );
              }
            )}
          </div>
          <div className="rightSide">
            <a onClick={() => handleNext()}>
              <FiChevronRight />
            </a>
          </div>
        </CarouselContent>
        <Selectors>
          <div className="SelectorsContainer">
            {Object.values(works).map(({ id }) => {
              return (
                <div className="worksSelector" key={id}>
                  <a
                    onClick={() => {
                      handleSelect(id);
                    }}
                    key={id}
                  >
                    <div
                      className={
                        id === selectedWork ? 'circleActived' : 'circle'
                      }
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </Selectors>
      </Container>
      <img src="./bottomTransiction.svg" />
    </>
  );
};

export default Carousel;
