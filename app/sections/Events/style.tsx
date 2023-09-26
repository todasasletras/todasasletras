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

export const EventsContainer = styled.div`
  background-color: ${V.color.black};
  display: grid;
  grid-column: 3/-1;
  grid-column-gap: 6em;
  grid-row-gap: ${V.spacing.medium};
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: ${V.spacing.large};
  padding: ${V.spacing.large} 6em;
  position: relative;

  &:before {
    background: url('/img/jellyfish-yellow.png') center center no-repeat;
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

  @media ${M.media.laptop} {
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
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Extra = styled.div`
  grid-column: 1/-1;
  margin: ${V.spacing.large} auto 0;
  text-align: center;
`;

export const ExtraTitle = styled.h3`
  font-size: 45px;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 auto;

  @media ${M.media.mobileL} {
    font-size: 30px;
  }
`;

export const ExtraImg = styled.img`
  height: 100px;

  @media ${M.media.mobileL} {
    height: 60px;
  }
`;
