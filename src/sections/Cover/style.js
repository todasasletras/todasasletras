import styled from 'styled-components';

import cover from 'assets/img/cover-img.png';
import pattern from 'assets/img/pattern-cover.png';
import * as V from 'styles/variables';
import * as T from 'styles/typography';
import * as M from 'styles/media';

export const Section = styled.section`
  background: url(${pattern}) right 144px no-repeat;
  background-color: ${V.color.purple};
  height: auto;
  min-height: 100vh;
  padding: calc(${V.spacing.large} * 2) 0;
  position: relative;

  @media ${M.media.laptop} {
    background-image: none;
  }

  @media ${M.media.tablet} {
    background-image: none;
    padding: ${V.spacing.large} 0;
  }
`;

export const Title = styled.h1`
  color: ${V.color.white};
  grid-column: 1/8;
  margin-top: ${V.spacing.large} !important;
  ${T.title}
  z-index: 2;
`;

export const Description = styled.a`
  color: ${V.color.white};
  grid-column: 1/-1;
  grid-row: 2;
  margin-top: ${V.spacing.medium} !important;
  ${T.titleSmall}
  text-decoration: none;
  transition: color 0.5s ease;
  z-index: 2;

  &:before {
    background-color: ${V.color.yellow};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 17px;
    margin-right: ${V.spacing.tiny};
    transition: background-color 0.5s ease;
    width: 17px;
  }

  &:hover {
    color: ${V.color.lightPurple};
  }
`;

export const Extra = styled.div`
  background: url(${cover}) bottom right no-repeat;
  background-size: contain;
  bottom: -8%;
  display: block;
  height: 800px;
  left: 0;
  margin: 0 auto;
  max-width: 1240px;
  min-width: 300px;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 100%;

  @media ${M.media.laptop} {
    left: unset;
    width: 50vw;
  }

  @media ${M.media.laptop} {
    bottom: -4%;
  }
`;
