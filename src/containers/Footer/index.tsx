import Logo from 'assets/svg/logo-white.svg';
import Container from 'components/Container';

import * as S from './style';

type FooterProps = {
  menus: menusProps[];
};

type menusProps = {
  title?: string;
  links?: [];
};

const Footer = ({ menus }: FooterProps) => {
  return (
    <S.Footer>
      <Container>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.MenuContainer>
          {menus.map((column) => (
            <S.MenuColumn key={column.title}>
              <S.MenuTitle>{column.title}</S.MenuTitle>
              <S.MenuNav>
                <S.LinksList>
                  {column.links &&
                    column.links.map((link) => (
                      <S.LinkItemList key={link.name}>
                        <S.Link href={link.url}>{link.name}</S.Link>
                      </S.LinkItemList>
                    ))}
                </S.LinksList>
              </S.MenuNav>
            </S.MenuColumn>
          ))}
        </S.MenuContainer>
      </Container>
    </S.Footer>
  );
};

export default Footer;
