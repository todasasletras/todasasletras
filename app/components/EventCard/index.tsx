import IconArrow from 'assets/svg/icon-arrow.svg';
import IconCalendar from 'assets/svg/icon-calendar.svg';
import IconPin from 'assets/svg/icon-pin.svg';

import * as S from './style';

type EventCardProps = {
  active?: boolean;
  cover: string;
  date: string;
  description: string;
  link?: string;
  location: string;
  name: string;
};

const EventCard = ({ active = true, cover, date, description, link = '', location, name }: EventCardProps) => {
  return (
    <S.Card>
      <S.Cover>
        <S.ImageComponent src={cover} alt={name} />
      </S.Cover>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      <S.Content>
        <S.Description>{description}</S.Description>
        <S.Info>
          <S.InfoItem>
            <S.InfoIcon>
              <IconCalendar />
            </S.InfoIcon>
            <S.InfoText>{date}</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon>
              <IconPin />
            </S.InfoIcon>
            <S.InfoText>{location}</S.InfoText>
          </S.InfoItem>
        </S.Info>
      </S.Content>
      <S.Cta active={active} href={link}>
        <S.CtaText>{active ? 'Inscreva-se' : 'Em breve!'}</S.CtaText>
        {active && <IconArrow />}
      </S.Cta>
    </S.Card>
  );
};

export default EventCard;
