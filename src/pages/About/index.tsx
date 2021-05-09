import React from 'react';
import SkillPlaque from '../../components/SkillPlaque';

import { VerticalBar } from '../../styles/common.styles';

import {
  Container,
  AboutWrapper,
  SkillWrapper,
  Portrait
} from '../../styles/pages/About/about.styles';

const About: React.FC = () => {
  return (
    <>
      <Container id="about">
        <Portrait src="portrait-ricardo.svg" alt="" />
        <AboutWrapper>
          <VerticalBar />
          <div className="aboutContentWrapper">
            <h1>Sobre mim</h1>
            <p>Desenvolvedor Frontend residindo em Porto Alegre-RS, Brasil.</p>
            <p>
              Ingressei em outubro de 2019 no curso de ciência da computação, já
              em dezembro daquele mesmo ano comecei a estudar as linguagens Java
              e Javascript nos cursos oferecidos pelo CoderBr.
            </p>
            <p>
              Em agosto de 2020 comecei os estudos na stack de desenvolvimento
              Javascript, NodeJS e React no curso GoStack oferecido pela
              Rocketseat.
            </p>
            <p>
              Neste curso pude aprimorar minhas habilidades em desenvolvimento
              web e aplicativos mobile. Esta stack se mostrou muito robusta,
              permitindo a integração entre backend, frontend e mobile.
            </p>
            <p>
              Hoje, dando continuidade aos meu estudos, dei início ao Ignite,
              também ministrado pela Rocketseat e com foco em nextJS e reactJS.
              Para me tornar relevante no mercado também venho estudando
              diversas bibliotecas e ferramentas como Sass, styled component,
              webpack, docker, scrum e muito mais.
            </p>
            <p>
              A idéia de construir este portfólio, além de ser uma vitrine de
              quem sou como programador, é demonstrar o conhecimento que adquiri
              ao longo dessa jornada. Além de expor os trabalhos que já
              desenvolvi, ele servirá para apresentar conteúdos para auxiliar os
              estudos de outras pessoas que possam se interessar por este
              caminho, através de um blog com dicas de como você pode iniciar
              sua jornada, das mais atuais ferramentas do mercado, técnicas e
              metodologias utilizadas em programação, boas práticas e tudo que
              for relevante ao nosso aprimoramento como profissionais.
            </p>
            <button type={'button'} className="buttonCV">
              <a href="">
                <p>Download Currículo</p>
                <img src="CV-Icon.svg" alt="" />
              </a>
            </button>
          </div>
        </AboutWrapper>
        <SkillWrapper>
          <VerticalBar />
          <div>
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
        </SkillWrapper>
      </Container>
      <img src="./topTransiction.svg" alt="" id="endTransiction" />
    </>
  );
};

export default About;
