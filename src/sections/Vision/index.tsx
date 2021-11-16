import Image from 'next/image';

import Container from 'components/Container';
import impact from 'data/impact';

import * as S from './style';

const Vision = () => {
  return (
    <S.Section id="visao">
      <Container>
        <S.Pillars>
          <S.Pillar>
            <Image src="/svg/icon-pillar-1.svg" width="94" height="60" />
            <S.PillarTitle>Capacitar</S.PillarTitle>
            <S.PillarText>
              Capacitamos pessoas LGBTI+ com encontros, cursos e treinamentos de tecnologia. Além de oferecer entradas
              gratuitas em grandes eventos.
            </S.PillarText>
          </S.Pillar>
          <S.Pillar>
            <Image src="/svg/icon-pillar-2.svg" width="61" height="61" />
            <S.PillarTitle>Inserir</S.PillarTitle>
            <S.PillarText>
              Inserimos pessoas LGBTI+ no mercado de trabalho com a divulgação de vagas e a presença cortesia em eventos
              importantes para a área.
            </S.PillarText>
          </S.Pillar>
          <S.Pillar>
            <Image src="/svg/icon-pillar-3.svg" width="120" height="60" />
            <S.PillarTitle>Crescer</S.PillarTitle>
            <S.PillarText>Geramos liderança LGBTI+ com treinamentos e mentorias para palestrantes.</S.PillarText>
          </S.Pillar>
        </S.Pillars>
        <S.ImpactContainer>
          <S.Impact>
            {impact &&
              impact.map((item) => (
                <S.ImpactItem key={item.title}>
                  <S.ImpactItemQuantity>{item.quantity}</S.ImpactItemQuantity>
                  <S.ImpactItemTitle>{item.title}</S.ImpactItemTitle>
                </S.ImpactItem>
              ))}
          </S.Impact>
        </S.ImpactContainer>
        <S.Extra>
          Diversidade <br />
          significa <br />
          crescimento
        </S.Extra>
      </Container>
    </S.Section>
  );
};

export default Vision;
