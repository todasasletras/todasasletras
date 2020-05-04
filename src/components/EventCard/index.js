import React from 'react';
import { bool, string } from 'prop-types';

import IconArrow from 'assets/svg/icon-arrow.svg';
import IconCalendar from 'assets/svg/icon-calendar.svg';
import IconPin from 'assets/svg/icon-pin.svg';

import * as S from './style';

export default function EventCard({
  active,
  cover,
  date,
  description,
  link,
  location,
  name,
}) {
  return (
    <S.Card>
      <S.Cover>
        <S.Image src={cover} alt={name} />
      </S.Cover>
      <S.NameContainer>
        <S.Name>
          {name}
        </S.Name>
      </S.NameContainer>
      <S.Content>
        <S.Description>
          {description}
        </S.Description>
        <S.Info>
          <S.InfoItem>
            <S.InfoIcon>
              <IconCalendar />
            </S.InfoIcon>
            <S.InfoText>
              {date}
            </S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon>
              <IconPin />
            </S.InfoIcon>
            <S.InfoText>
              {location}
            </S.InfoText>
          </S.InfoItem>
        </S.Info>
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

EventCard.defaultProps = {
  active: true,
  link: '',
};

EventCard.propTypes = {
  active: bool,
  cover: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  link: string,
  location: string.isRequired,
  name: string.isRequired,
};
