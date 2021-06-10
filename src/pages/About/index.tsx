import React from 'react';
import SkillPlaque from '../../components/SkillPlaque';

import { VerticalBar, Container } from '../../styles/common.styles';

import {
  AboutContainer,
  AboutContent
} from '../../styles/pages/About/about.styles';

const About: React.FC = () => {
  return (
    <Container>
      <AboutContainer>
        <div className="portrait">
          <img src="/portrait-circle.svg" alt="" className="portraitCircle" />
          <img src="/portrait-blobs.svg" alt="" className="portraitBlobs" />
        </div>
        <AboutContent>
          <section className="aboutMain">
            <VerticalBar />
            <main className="aboutWrapper">
              <div className="aboutContent">
                <h1>Sobre mim</h1>
                <p>
                  Desenvolvedor Fullstack Web residindo em Porto Alegre-RS,
                  Brasil.
                </p>
                <p>
                  Ingressei em outubro de 2019 no curso de ciência da
                  computação, já em dezembro daquele mesmo ano comecei a estudar
                  as linguagens Java e Javascript nos cursos oferecidos pelo
                  CoderBr.
                </p>
                <p>
                  Em agosto de 2020 comecei os estudos na stack de
                  desenvolvimento Javascript, NodeJS e React no curso GoStack
                  oferecido pela Rocketseat.
                </p>
                <p>
                  Neste curso pude aprimorar minhas habilidades em
                  desenvolvimento web e aplicativos mobile. Esta stack se
                  mostrou muito robusta, permitindo a integração entre backend,
                  frontend e mobile.
                </p>
                <p>
                  Hoje, dando continuidade aos meu estudos, dei início ao
                  Ignite, também ministrado pela Rocketseat e com foco em nextJS
                  e reactJS. Para me tornar relevante no mercado também venho
                  estudando diversas bibliotecas e ferramentas como Sass, styled
                  component, webpack, docker, scrum e muito mais.
                </p>
                <p>
                  Além de expor os trabalhos que já desenvolvi, aqui você também
                  terá acesso a conteúdos para auxiliá-lo nos seus estudos,
                  partindo de como você pode iniciar sua jornada, com dicas de
                  cursos gratuitos e do uso de diversas ferramentas e
                  bibliotecas relevantes no mercado, discussões sobre as boas
                  práticas da programação e seu uso no dia a dia.
                </p>
                <p>Seja muito bem vindo!</p>
                {/* <button type={'button'} className="buttonCV">
                  <a href="">
                    <p>Download Currículo</p>
                    <img src="CV-Icon.svg" alt="" />
                  </a>
                </button> */}
              </div>
            </main>
          </section>
          <section className="skillsMain">
            <VerticalBar />
            <main className="skillsWrapper">
              <div className="skillsContent">
                <h1>Habilidades</h1>
                <div className="skillBar">
                  <SkillPlaque title={'HTML 5'} slug={'html5'} />
                  <SkillPlaque title={'CSS 3'} slug={'css3'} />
                  <SkillPlaque title={'Javascript'} slug={'javascript'} />
                  <SkillPlaque title={'Typescript'} slug={'typescript'} />
                  <SkillPlaque title={'Java'} slug={'java'} />
                  <SkillPlaque title={'React'} slug={'react'} />
                  <SkillPlaque title={'Next.JS'} slug={'next-dot-js'} />
                  <SkillPlaque title={'Node.JS'} slug={'node-dot-js'} />
                  <SkillPlaque title={'MySQL'} slug={'mysql'} />
                  <SkillPlaque title={'PostgreSQL'} slug={'postgresql'} />
                  <SkillPlaque title={'MongoDB'} slug={'mongodb'} />
                  <SkillPlaque title={'VS Code'} slug={'visualstudiocode'} />
                  <SkillPlaque title={'GitHub'} slug={'github'} />
                  <SkillPlaque title={'Yarn'} slug={'yarn'} />
                  <SkillPlaque title={'Babel'} slug={'babel'} />
                  <SkillPlaque title={'JSON'} slug={'json'} />
                  <SkillPlaque title={'Sass'} slug={'sass'} />
                  <SkillPlaque
                    title={'Styled Components'}
                    slug={'styled-components'}
                  />
                  <SkillPlaque title={'Webpack'} slug={'webpack'} />
                  <SkillPlaque title={'Docker'} slug={'docker'} />
                  <SkillPlaque title={'Trello'} slug={'trello'} />
                  <SkillPlaque title={'Figma'} slug={'figma'} />
                  <SkillPlaque title={'Insomnia'} slug={'insomnia'} />
                  <SkillPlaque title={'Prettier'} slug={'prettier'} />
                  <SkillPlaque title={'EsLint'} slug={'eslint'} />
                  <SkillPlaque title={'EditorConfig'} slug={'editorconfig'} />
                  <SkillPlaque title={'Netlify'} slug={'netlify'} />
                  <SkillPlaque title={'Vercel'} slug={'vercel'} />
                  <SkillPlaque title={'Digital Ocean'} slug={'digitalocean'} />
                  <SkillPlaque title={'Ubuntu'} slug={'ubuntu'} />
                  <SkillPlaque title={'Windows'} slug={'windows'} />
                  <SkillPlaque
                    title={'Microsoft Office'}
                    slug={'microsoftoffice'}
                  />
                </div>
              </div>
            </main>
          </section>
        </AboutContent>
      </AboutContainer>
      <img
        src="./topTransiction.svg"
        alt=""
        className="transictionDecoratorTop"
        id="highlights"
      />
    </Container>
  );
};

export default About;
