import { ContentContainer } from './styles';

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
    <ContentContainer>
      <section className="main">
        <div className={isSelected ? '' : 'disabled'}>
          <main className="carouselContent">
            <div className="title">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </div>
            <div className="center">
              <div className="imageContainer">
                <img src={thumbnail} alt="" />
              </div>
            </div>
            <div className="aboutWork">
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="linkContainer">
                <div className="link">
                  <a href={link} target="_blank" rel="noreferrer">
                    Acessar Site
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </ContentContainer>
  );
};

export default CarouselItem;
