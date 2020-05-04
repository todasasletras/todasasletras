import React from 'react';
import {
  array,
  arrayOf,
  shape,
  string,
} from 'prop-types';

import Container from 'components/Container';

import * as S from './style';

export default function Partnerships({
  partners,
}) {
  return (
    <S.Section id="parcerias">
      <Container>
        {partners.map((type) => (
          <S.PartnersSection key={type.title}>
            <S.PartnersType>
              {type.title}
            </S.PartnersType>
            <S.PartnersList>
              {type.list && type.list.map((partner) => (
                <S.PartnerItem key={partner.name}>
                  <S.PartnerLink href={partner.url}>
                    <S.PartnerImage src={partner.img} alt={partner.name} />
                  </S.PartnerLink>
                </S.PartnerItem>
              ))}
            </S.PartnersList>
          </S.PartnersSection>
        ))}
      </Container>
    </S.Section>
  );
}

Partnerships.propTypes = {
  partners: arrayOf(shape({
    title: string,
    list: array,
  })).isRequired,
};
