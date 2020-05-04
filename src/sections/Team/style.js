import styled from 'styled-components';

import jellyfish from 'assets/img/jellyfish-purple.png';

import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Section = styled.section`
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

export const TeamContainer = styled.div`
  background-color: ${V.color.yellow};
  display: grid;
  grid-column: 1/11;
  grid-column-gap: 1em;
  grid-template-columns: repeat(10, 1fr);
  margin-top: ${V.spacing.large};
  padding: ${V.spacing.large} 0;
  position: relative;

  &:before {
    background-color: inherit;
    content: '';
    height: 100%;
    position: absolute;
    right: 100%;
    top: 0;
    width: 100%;
  }

  &:after {
    background: url(${jellyfish}) center center no-repeat;
    bottom: 0;
    content: '';
    height: 160px;
    position: absolute;
    right: -160px;
    width: 160px;
  }
`;

export const Team = styled.div`
  display: grid;
  grid-column: 1/8;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.large};
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
`;

export const Extra = styled.h3`
  grid-column: 8/-1;
  left: ${V.spacing.medium};
  ${T.titleLarge}
  position: absolute;
  top: ${V.spacing.large};
  width: 50vw;
`;
