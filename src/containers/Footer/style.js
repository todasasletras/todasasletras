import styled from 'styled-components';

import * as V from 'styles/variables';

export const Footer = styled.footer`
  background-color: ${V.color.purple};
  padding: ${V.spacing.large} 0;
`;

export const LogoContainer = styled.div`
  grid-column: 1/5;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: grid;
  grid-column: 5/13;
  grid-column-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
`;

export const MenuColumn = styled.div``;

export const MenuTitle = styled.h4`
  color: ${V.color.white};
  font-size: 12px;
  font-weight: 400;
  margin: 0;
`;

export const MenuNav = styled.nav`
  margin-top: 15px;
`;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItemList = styled.li`
  &:not(:first-child) {
    margin-top: ${V.spacing.tiny};
  }
`;

export const Link = styled.a`
  color: ${V.color.white};
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.5s ease;

  &:after {
    background-color: ${V.color.lightPurple};
    content: '';
    display: block;
    height: 1px;
    transition: 0.2s;
    width: 0px;
  }

  &:hover {
    color: ${V.color.lightPurple};

    &:after {
      width: 100%;
    }
  }
`;
