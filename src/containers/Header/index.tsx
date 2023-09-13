import IconFacebook from 'assets/svg/icon-facebook.svg';
import IconInstagram from 'assets/svg/icon-instagram.svg';
import IconLinkedin from 'assets/svg/icon-linkedin.svg';
import IconTwitter from 'assets/svg/icon-twitter.svg';
import IconYoutube from 'assets/svg/icon-youtube.svg';

import Container from 'components/Container';

import * as S from './style';

type HeaderProps = {
  fixedHeader?: boolean;
  menu: Menu;
  scroll?: boolean;
};

type Menu = {
  social?: Social;
  links?: Link[];
};

type Social = {
  twitter?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  youtube?: string;
};

type Link = {
  name: string;
  url: string;
};

const Header = ({ fixedHeader = false, menu, scroll = false }: HeaderProps) => {
  return (
    <S.Header fixedHeader={fixedHeader} scroll={scroll}>
      <Container>
        <S.LogoContainer>{fixedHeader ? <S.LogoPurple /> : <S.LogoYellow />}</S.LogoContainer>
        <S.MenuContainer fixedHeader={fixedHeader} scroll={scroll}>
          <S.MenuNav>
            <S.LinksList>
              {menu.links?.map((link) => (
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
                        <IconTwitter />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.instagram && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.instagram} fixedHeader={fixedHeader}>
                        <IconInstagram />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.facebook && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.facebook} fixedHeader={fixedHeader}>
                        <IconFacebook />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.linkedin && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.linkedin} fixedHeader={fixedHeader}>
                        <IconLinkedin />
                      </S.LinkSvg>
                    </S.LinkItemList>
                  )}
                  {menu.social.youtube && (
                    <S.LinkItemList>
                      <S.LinkSvg href={menu.social.youtube} fixedHeader={fixedHeader}>
                        <IconYoutube />
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
