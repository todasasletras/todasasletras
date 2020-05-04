import React from 'react';

import Container from 'components/Container';

import * as S from './style';

export default function About() {
  return (
    <S.Section id="historia">
      <Container>
        <S.Title>
          Nossa <br />história
        </S.Title>
        <S.Description>
          <S.TextBlock>
            A falta de iniciativas para pessoas
            <strong> LGBTI+</strong> nos motivou a criar o projeto,
            em março de 2018.
            Nosso objetivo inicial era ser um grupo de apoio para compartilhar vivências.
            E essa ideia expandiu!
          </S.TextBlock>
          <S.TextBlock>
            Os encontros passaram a ensinar conteúdos técnicos para alavancar as carreiras
            dos participantes.
            E, de treinamento em treinamento, nos tornamos o maior meetup
            <strong> LGBTI+</strong> da América Latina.
          </S.TextBlock>
          <S.TextBlock>
            Como a água-viva, somos transparentes e fluímos para a mudança!
          </S.TextBlock>
          <S.TextBlock>
            <strong>Todas as nossas ações são pautadas em 3 pilares principais:</strong>
          </S.TextBlock>
        </S.Description>
      </Container>
    </S.Section>
  );
}
