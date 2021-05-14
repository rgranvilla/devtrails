import { CarouselContent, Container, ContentContainer } from './styles';

type Work = {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  link: string;
  isSelected: boolean;
};

const CarouselItem: React.FC<Work> = ({
  title,
  subtitle,
  description,
  thumbnail,
  link,
  isSelected
}: Work) => {
  return (
    <Container>
      <ContentContainer>
        <div className={isSelected ? '' : 'disabled'}>
          <CarouselContent>
            <div className="title">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </div>
            <div className="center">
              <img src={thumbnail} alt="" />
            </div>
            <div className="aboutWork">
              <div className="description">
                <p>{description}</p>
              </div>
              <div>
                <div className="link">
                  <a href={link} target="_blank" rel="noreferrer">
                    Acessar Site
                  </a>
                </div>
              </div>
            </div>
          </CarouselContent>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default CarouselItem;
