import Image from 'next/image';

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
        <S.Image src={cover} alt={name} />
      </S.Cover>
      <S.NameContainer>
        <S.Name>{name}</S.Name>
      </S.NameContainer>
      <S.Content>
        <S.Description>{description}</S.Description>
        <S.Info>
          <S.InfoItem>
            <S.InfoIcon>
              <Image src="/svg/icon-calendar.svg" width="19" height="18" />
            </S.InfoIcon>
            <S.InfoText>{date}</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoIcon>
              <Image src="/svg/icon-pin.svg" width="12" height="15" />
            </S.InfoIcon>
            <S.InfoText>{location}</S.InfoText>
          </S.InfoItem>
        </S.Info>
      </S.Content>
      <S.Cta active={active} href={link}>
        <S.CtaText>{active ? 'Inscreva-se' : 'Em breve!'}</S.CtaText>
        {active && <Image src="/svg/icon-arrow.svg" width="24" height="12" />}
      </S.Cta>
    </S.Card>
  );
};

export default EventCard;
