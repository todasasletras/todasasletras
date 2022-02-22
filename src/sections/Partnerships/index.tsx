import Container from 'components/Container';

import * as S from './style';

type PartnershipsProps = {
  partners: Partners;
};

type Partners = {
  sponsorship?: Partner[];
  educational?: Partner[];
  support?: Partner[];
};

type Partner = {
  name: string;
  url: string;
  img: string;
};

const Partnerships = ({ partners }: PartnershipsProps) => {
  return (
    <S.Section id="parcerias">
      <Container>
        {partners.sponsorship?.length ? (
          <S.PartnersSection>
            <S.PartnersType>Patrocínio</S.PartnersType>
            <S.PartnersList>
              {partners.sponsorship?.map((partner) => (
                <S.PartnerItem key={partner.name}>
                  <S.PartnerLink href={partner.url}>
                    <S.PartnerImage src={partner.img} alt={partner.name} />
                  </S.PartnerLink>
                </S.PartnerItem>
              ))}
            </S.PartnersList>
          </S.PartnersSection>
        ) : null}
        <S.PartnersSection>
          {partners.educational?.length ? (
            <S.PartnersSectionEducational>
              <S.PartnersType>Parcerias Educacionais</S.PartnersType>
              <S.PartnersListEducational>
                {partners.educational?.map((partner) => (
                  <S.PartnerItem key={partner.name}>
                    <S.PartnerLink href={partner.url}>
                      <S.PartnerImage src={partner.img} alt={partner.name} />
                    </S.PartnerLink>
                  </S.PartnerItem>
                ))}
              </S.PartnersListEducational>
            </S.PartnersSectionEducational>
          ) : null}
          {partners.support?.length ? (
            <S.PartnersSectionSupport>
              <S.PartnersType>Apoio</S.PartnersType>
              <S.PartnersListSupport>
                {partners.support?.map((partner) => (
                  <S.PartnerItem key={partner.name}>
                    <S.PartnerLink href={partner.url}>
                      <S.PartnerImage src={partner.img} alt={partner.name} />
                    </S.PartnerLink>
                  </S.PartnerItem>
                ))}
              </S.PartnersListSupport>
            </S.PartnersSectionSupport>
          ) : null}
        </S.PartnersSection>
      </Container>
    </S.Section>
  );
};

export default Partnerships;
