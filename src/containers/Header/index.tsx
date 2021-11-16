import Image from 'next/image';

import Container from 'components/Container';

import * as S from './style';

type HeaderProps = {
  fixedHeader?: boolean;
  menu: menusProps;
  scroll?: boolean;
};

type menusProps = {
  social?: object;
  links?: [];
};

const Header = ({ fixedHeader = false, menu, scroll = false }: HeaderProps) => {
  return (
    <S.Header fixedHeader={fixedHeader} scroll={scroll}>
      <Container>
        <S.LogoContainer>
          {fixedHeader ? (
            <Image src="/svg/logo-purple.svg" width="117" height="50" />
          ) : (
            <Image src="/svg/logo-yellow.svg" width="157" height="67" />
          )}
        </S.LogoContainer>
        <S.MenuContainer fixedHeader={fixedHeader} scroll={scroll}>
          <S.MenuNav>
            <S.LinksList>
              {menu.links.map((link) => (
                <S.LinkItemList key={link.name}>
                  <S.Link href={link.url} fixedHeader={fixedHeader} scroll={scroll}>
                    {link.name}
                  </S.Link>
                </S.LinkItemList>
              ))}
              {menu.social && (
                <>
                  {menu.social.twitter && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.twitter} fixedHeader={fixedHeader}>
                        <Image src="/svg/icon-twitter.svg" width="20" height="20" />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.instagram && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.instagram} fixedHeader={fixedHeader}>
                        <Image src="/svg/icon-instagram.svg" width="20" height="20" />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.facebook && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.facebook} fixedHeader={fixedHeader}>
                        <Image src="/svg/icon-facebook.svg" width="20" height="20" />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.linkedin && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.linkedin} fixedHeader={fixedHeader}>
                        <Image src="/svg/icon-linkedin.svg" width="20" height="20" />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.youtube && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.youtube} fixedHeader={fixedHeader}>
                        <Image src="/svg/icon-youtube.svg" width="20" height="20" />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                </>
              )}
            </S.LinksList>
          </S.MenuNav>
        </S.MenuContainer>
      </Container>
    </S.Header>
  );
};

export default Header;
