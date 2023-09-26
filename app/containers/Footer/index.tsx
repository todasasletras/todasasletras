import Image from 'next/image'
import Container from '../../components/Container';

import * as S from './style';

type FooterProps = {
  menus: Menus[];
};

type Menus = {
  title?: string;
  links?: Link[];
};

type Link = {
  name: string;
  url: string;
};

const Footer = ({ menus }: FooterProps) => {
  return (
    <S.Footer>
      <Container>
        <S.LogoContainer>
          <Image
            src="/svg/logo-white.svg"
            width={221}
            height={78}
            alt="Logo Todas as Letras"
          />
        </S.LogoContainer>
        <S.MenuContainer>
          {menus.map((column) => (
            <S.MenuColumn key={column.title}>
              <S.MenuTitle>{column.title}</S.MenuTitle>
              <S.MenuNav>
                <S.LinksList>
                  {column.links?.map((link) => (
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
