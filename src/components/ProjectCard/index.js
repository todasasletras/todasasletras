import React from 'react';
import { bool, string } from 'prop-types';

import IconArrow from 'assets/svg/icon-arrow.svg';

import * as S from './style';

export default function ProjectCard({
  active,
  cover,
  description,
  link,
  name,
}) {
  return (
    <S.Card>
      <S.Cover>
        <S.Image src={cover} alt={name} />
      </S.Cover>
      <S.Content>
        <S.Name>
          {name}
        </S.Name>
        <S.Description>
          {description}
        </S.Description>
      </S.Content>
      <S.Cta active={active} href={link}>
        <S.CtaText>
          {active
            ? 'Inscreva-se'
            : 'Em breve!'}
        </S.CtaText>
        {active && <IconArrow />}
      </S.Cta>
    </S.Card>
  );
}

ProjectCard.defaultProps = {
  active: true,
  link: '',
};

ProjectCard.propTypes = {
  active: bool,
  cover: string.isRequired,
  description: string.isRequired,
  link: string,
  name: string.isRequired,
};
