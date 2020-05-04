import styled from 'styled-components';

import pattern from 'assets/img/pattern-projects.png';
import jellyfish from 'assets/img/jellyfish-purple.png';
import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Section = styled.section`
  background: url(${pattern}) center bottom no-repeat;
  background-color: ${V.color.white};
  background-size: contain;
  padding: ${V.spacing.large} 0 calc(${V.spacing.large}*2);
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

export const ProjectsContainer = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 3em;
  grid-row-gap: ${V.spacing.large};
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: ${V.spacing.large};
  position: relative;
`;

export const Extra = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  margin: calc(${V.spacing.large}*2) auto 0;
`;

export const ExtraTitle = styled.h3`
  color: ${V.color.purple};
  flex: 1;
  ${T.title}

  & span {
    color: ${V.color.yellow};
  }
`;

export const ExtraJellyfish = styled.span`
  background: url(${jellyfish}) center center no-repeat;
  background-size: contain;
  height: auto;
  margin-left: 3em;
  width: 20%;
`;
