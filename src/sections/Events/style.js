import styled from 'styled-components';

import pattern from 'assets/img/pattern-events.png';
import jellyfish from 'assets/img/jellyfish-yellow.png';

import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Section = styled.section`
  background: url(${pattern}) left top no-repeat, url(${pattern}) right bottom no-repeat;
  background-color: ${V.color.white};
  background-size: 40%;
  padding: ${V.spacing.large} 0;
`;

export const Title = styled.h2`
  grid-column: 1/8;
  margin: 0 !important;
  ${T.title}
`;

export const Description = styled.p`
  grid-column: 8/-1;
  ${T.text}
`;

export const EventsContainer = styled.div`
  background-color: ${V.color.black};
  display: grid;
  grid-column: 3/-1;
  grid-column-gap: 6em;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: ${V.spacing.large};
  padding: ${V.spacing.large} 6em;
  position: relative;

  &:before {
    background: url(${jellyfish}) center center no-repeat;
    content: '';
    height: 100px;
    left: -50px;
    position: absolute;
    top: 0;
    width: 100px;
  }

  &:after {
    background-color: inherit;
    content: '';
    height: 100%;
    left: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Extra = styled.div`
  grid-column: 1/-1;
  margin: ${V.spacing.large} auto 0;
`;

export const ExtraTitle = styled.h3`
  font-size: 45px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 auto;
`;

export const ExtraImg = styled.img`
  height: 100px;
`;
