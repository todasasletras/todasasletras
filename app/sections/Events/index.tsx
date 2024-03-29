import Image from 'next/image'
import Container from '../../components/Container';
// import EventCard from '../../components/EventCard';
// import events from 'data/events';

import * as S from './style';

const Events = () => {
  return (
    <S.Section id="eventos">
      <Container>
        {/* <S.Title>
          Próximos <br />
          eventos
        </S.Title>
        <S.Description>
          Confira nossos próximos eventos presenciais ou online. Participe e faça a diferença!
        </S.Description>
        <S.EventsContainer>
          {events?.map((event) => (
            <EventCard
              key={event.name}
              cover={event.img}
              name={event.name}
              description={event.description}
              date={event.date}
              location={event.location}
              link={event.url}
              active={event.active}
            />
          ))}
        </S.EventsContainer> */}
        <S.Extra>
          <S.ExtraTitle>Transformando o mundo</S.ExtraTitle>
          <S.ExtraImg src="/img/juntes-img.png" alt="juntes" />
        </S.Extra>
        <S.Extra>
          <Image
            src="/svg/rainbow-yellow.svg"
            width={120}
            height={60}
            alt=""
          />
        </S.Extra>
      </Container>
    </S.Section>
  );
};

export default Events;
