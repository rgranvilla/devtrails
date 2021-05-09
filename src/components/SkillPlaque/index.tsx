import React from 'react';
import simpleIcon from 'simple-icons';

import { Container } from './styles';

type SkillPlaqueProps = {
  title: string;
  slug: string;
};

const SkillPlaque: React.FC<SkillPlaqueProps> = (props: SkillPlaqueProps) => {
  const icon = simpleIcon.get(`${props.slug}`);

  function createMarkup() {
    return { __html: `${icon.svg}` };
  }

  return (
    <Container>
      <div>
        <div dangerouslySetInnerHTML={createMarkup()} className="icon" />
        <p>{props.title}</p>
      </div>
    </Container>
  );
};

export default SkillPlaque;
