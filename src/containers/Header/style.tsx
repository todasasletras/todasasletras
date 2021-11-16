import styled, { css } from 'styled-components';

import SvgLogoPurple from '/svg/logo-purple.svg';
import SvgLogoYellow from '/svg/logo-yellow.svg';
import * as V from 'styles/variables';
import * as M from 'styles/media';

export const Header = styled.header`
  background-color: transparent;
  ${(props) =>
    props.fixedHeader &&
    css`
      background-color: ${V.color.white};
      box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.4);
      padding: ${V.spacing.tiny} 0 !important;
    `};
  ${(props) =>
    props.scroll &&
    css`
      transform: translateY(-100%) !important;
    `};
  padding: ${V.spacing.medium} 0;
  position: fixed;
  top: 0;
  transform: translateY(0);
  transition: all 0.5s ease;
  width: 100%;
  will-change: transform;
  z-index: 10;
`;

export const LogoContainer = styled.div`
  grid-column: 1/5;
`;

export const LogoPurple = styled(SvgLogoPurple)`
  height: 50px;
`;

export const LogoYellow = styled(SvgLogoYellow)`
  height: 67px;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const MenuContainer = styled.div`
  align-items: flex-start;
  display: flex;
  grid-column: 5/13;
  justify-content: flex-end;
  ${(props) =>
    props.fixedHeader &&
    css`
      align-items: center;
    `};

  @media ${M.media.tabletM} {
    display: none;
  }
`;

export const MenuNav = styled.nav``;

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItemList = styled.li`
  &:not(:first-child) {
    margin-left: ${V.spacing.small};
  }
`;

export const Link = styled.a`
  color: ${V.color.white};
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  ${(props) =>
    props.fixedHeader &&
    css`
      color: ${V.color.black};
    `};
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.5s ease;

  &:after {
    background-color: ${V.color.lightPurple};
    content: '';
    display: block;
    height: 1px;
    ${(props) =>
      props.fixedHeader &&
      css`
        background-color: ${V.color.purple};
      `};
    transition: 0.2s;
    width: 0px;
  }

  &:hover {
    color: ${V.color.lightPurple};
    ${(props) =>
      props.fixedHeader &&
      css`
        color: ${V.color.purple};
      `};

    &:after {
      width: 100%;
    }
  }

  & svg {
    fill: ${V.color.white};
    height: 20px;
    ${(props) =>
      props.fixedHeader &&
      css`
        fill: ${V.color.black};
      `};
    vertical-align: middle;
    width: 20px;
  }
`;

export const LinkSvg = styled.a`
  display: inline-block;

  & svg {
    fill: ${V.color.white};
    height: 20px;
    ${(props) =>
      props.fixedHeader &&
      css`
        fill: ${V.color.black};
      `};
    transition: fill 0.2s ease;
    vertical-align: middle;
    width: 20px;
  }

  &:hover svg {
    fill: ${V.color.lightPurple};
    ${(props) =>
      props.fixedHeader &&
      css`
        fill: ${V.color.purple};
      `};
  }
`;
