import styled from 'styled-components';

import jellyfish from 'assets/img/jellyfish-purple-bg.png';
import pattern from 'assets/img/pattern-vision.png';
import * as V from 'styles/variables';
import * as T from 'styles/typography';
import * as M from 'styles/media';

export const Section = styled.section`
  background: url(${pattern}) left bottom no-repeat;
  background-color: ${V.color.white};
  background-size: 40%;
  padding: ${V.spacing.large} 0;

  @media ${M.media.tablet} {
    padding: ${V.spacing.medium} 0;
  }
`;

export const Pillars = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 3em;
  grid-template-columns: repeat(3, 1fr);

  @media ${M.media.tabletL} {
    grid-row-gap: ${V.spacing.medium};
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Pillar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PillarTitle = styled.h3`
  font-size: 50px;
  letter-spacing: -0.03em;
  margin: ${V.spacing.tiny} 0 0;

  @media ${M.media.tabletL} {
    font-size: 40px;
  }
`;

export const PillarText = styled.p`
  font-size: 16px;
  line-height: 31px;
  margin: ${V.spacing.small} 0 0;

  @media ${M.media.tabletL} {
    margin: ${V.spacing.tiny} 0 0;
  }
`;

export const ImpactContainer = styled.div`
  background: url(${jellyfish}) center center no-repeat;
  background-color: ${V.color.purple};
  background-size: auto 90%;
  display: grid;
  grid-column: 3/-1;
  grid-column-gap: 1em;
  grid-row: 2;
  grid-template-columns: repeat(10, 1fr);
  margin-top: ${V.spacing.large};
  padding: ${V.spacing.large} 0;
  position: relative;

  &:after {
    background-color: inherit;
    content: '';
    height: 100%;
    left: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media ${M.media.tabletL} {
    background-size: contain;
    grid-column: 1/-1;
    margin-top: ${V.spacing.medium};
    padding: ${V.spacing.medium};
  }
`;

export const Impact = styled.ul`
  grid-column: 7/-1;
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${M.media.tabletL} {
    grid-column: 1/-1;
  }
`;

export const ImpactItem = styled.li`
  align-items: flex-start;
  color: ${V.color.white};
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: ${V.spacing.medium};
  }

  @media ${M.media.tabletL} {
    align-items: center;
  }
`;

export const ImpactItemQuantity = styled.span`
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

export const ImpactItemTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

export const Extra = styled.h3`
  grid-column: 1/8;
  grid-row: 2;
  margin-top: calc(${V.spacing.large} * 2) !important;
  ${T.titleLarge}
  width: 50vw;
  z-index: 1;

  @media ${M.media.tabletL} {
    display: none;
  }
`;
