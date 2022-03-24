import type { NextPage } from 'next';
import Head from 'next/head';

import Container from 'components/Container';
import * as S from '../../containers/Immersion/style';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <title>Todas as Letras - Imersão Front-end</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <S.Main>
        <Container>
          <S.ContainerContent>
            <S.Logo>
              <S.ImageComponent src="/immersion/logo-imersao.png" layout="fill" objectFit="contain" />
            </S.Logo>
            <S.Title>
              <span>O seu código</span>
              <br />
              <span>tem o poder</span>
              <br />
              <span>de mudar</span>
              <br />
              <span>o mundo</span>
            </S.Title>
            <S.LogoSolo>
              <S.ImageComponent src="/immersion/logo-solo.svg" layout="fill" objectFit="contain" />
            </S.LogoSolo>
            <S.Button href="https://forms.gle/x53dm4smFeKMAkux8">
              <span>Inscreva-se</span>
              <span>&gt;</span>
            </S.Button>
          </S.ContainerContent>
          <S.ContainerPhoto />
          <S.ContainerPartnerships>
            <S.Partnerships1>
              <S.PartnershipsTitle>Patrocínio</S.PartnershipsTitle>
              <S.PartnerLogo>
                <S.ImageComponent src="/immersion/logo-itau.svg" layout="fill" objectFit="contain" />
              </S.PartnerLogo>
            </S.Partnerships1>
            <S.Partnerships2>
              <S.PartnershipsTitle>Apoio</S.PartnershipsTitle>
              <S.PartnersLogos>
                <S.PartnerLogo>
                  <S.ImageComponent src="/immersion/logo-maisdiversidade.png" layout="fill" objectFit="contain" />
                </S.PartnerLogo>
                <S.PartnerLogo>
                  <S.ImageComponent src="/immersion/logo-cocacola.png" layout="fill" objectFit="contain" />
                </S.PartnerLogo>
                <S.PartnerLogo>
                  <S.ImageComponent src="/immersion/logo-coletivofuturo.png" layout="fill" objectFit="contain" />
                </S.PartnerLogo>
                <S.PartnerLogo>
                  <S.ImageComponent src="/immersion/logo-phi.png" layout="fill" objectFit="contain" />
                </S.PartnerLogo>
                <S.PartnerLogo>
                  <S.ImageComponent src="/immersion/logo-cesar.png" layout="fill" objectFit="contain" />
                </S.PartnerLogo>
              </S.PartnersLogos>
            </S.Partnerships2>
            <S.Partnerships3>
              <S.PartnershipsTitle>Realização</S.PartnershipsTitle>
              <S.PartnerLogo>
                <S.ImageComponent src="/immersion/logo-todas.png" layout="fill" objectFit="contain" />
              </S.PartnerLogo>
            </S.Partnerships3>
          </S.ContainerPartnerships>
        </Container>
      </S.Main>
    </>
  );
};

export default Home;
