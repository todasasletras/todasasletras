import React from 'react';

import Container from 'components/Container';

import * as S from './style';

export default function Cover() {
  return (
    <S.Section>
      <Container>
        <S.Title>
          Inserimos talentos LGBTI+ na área de tecnologia.
        </S.Title>
        <S.Description href="#historia">
          Conheça nossa história
        </S.Description>
      </Container>
      <S.Extra />
    </S.Section>
  );
}
