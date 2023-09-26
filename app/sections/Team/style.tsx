import styled from 'styled-components';

import * as V from '../../styles/variables';
import * as T from '../../styles/typography';
import * as M from '../../styles/media';

export const Section = styled.section`
  background-color: ${V.color.white};
  background-size: 40%;
  padding: ${V.spacing.large} 0;

  @media ${M.media.tablet} {
    padding: ${V.spacing.medium} 0;
  }
`;

export const Title = styled.h2`
  grid-column: 1/8;
  margin: 0 !important;
  ${T.title}

  @media ${M.media.tablet} {
    grid-column: 1/-1;
  }
`;

export const Description = styled.p`
  grid-column: 8/-1;
  ${T.text}

  @media ${M.media.tablet} {
    grid-column: 1/10;
    padding-top: ${V.spacing.small};
  }

  @media ${M.media.mobileM} {
    grid-column: 1/-1;
  }
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
    background: url('/img/jellyfish-purple.png') center center no-repeat;
    bottom: 0;
    content: '';
    height: 160px;
    position: absolute;
    right: -160px;
    width: 160px;
  }

  @media ${M.media.laptop} {
    grid-column: 1/-1;
    grid-column-gap: 4em;
    margin-top: ${V.spacing.medium};
    padding: ${V.spacing.large} 4em;
  }

  @media ${M.media.tabletL} {
    grid-column-gap: 3em;
    padding: ${V.spacing.medium} 3em;
  }

  @media ${M.media.tablet} {
    grid-column: 1/-1;

    &:after {
      right: -80px;
    }
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Team = styled.div`
  display: grid;
  grid-column: 1/8;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.medium};
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  @media ${M.media.laptop} {
    grid-column: 1/-1;
  }

  @media ${M.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Extra = styled.h3`
  grid-column: 8/-1;
  left: ${V.spacing.medium};
  ${T.titleLarge}
  position: absolute;
  top: ${V.spacing.large};
  width: 50vw;

  @media ${M.media.laptop} {
    display: none;
  }
`;
