import styled from 'styled-components';
import Link from 'next/link';

import * as V from '../../styles/variables';
import * as T from '../../styles/typography';
import * as M from '../../styles/media';

export const Section = styled.section`
  background-color: ${V.color.white};
  background-size: contain;
  padding: ${V.spacing.large} 0 calc(${V.spacing.large}*2);

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

export const ProjectsContainer = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 3em;
  grid-row-gap: ${V.spacing.medium};
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-top: ${V.spacing.large};
  position: relative;

  @media ${M.media.tabletL} {
    grid-row-gap: ${V.spacing.medium};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${V.spacing.medium};
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background-color: ${V.color.grey};
  display: flex;
  flex-direction: column;
  padding: ${V.spacing.medium};
  width: 100%;
`;

export const ProjectCardTitle = styled.h3`
  ${T.titleSmall}
  text-transform: initial;
`;

export const ProjectCardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: ${V.spacing.small};
`;

export const ProjectCardListItem = styled.li`
  align-items: center;
  display: flex;
  ${T.text}

  &:not(:first-child) {
    margin-top: ${V.spacing.tiny};
  }

  & img {
    margin-right: ${V.spacing.tiny};
  }
`;

export const ProjectCardLink = styled.a`
  align-items: center;
  color: ${V.color.black};
  cursor: pointer;
  display: flex;
  text-decoration: none !important;
`;

export const ProjectCardLinkNext = styled(Link)`
  ${ProjectCardLink}
  cursor: pointer;
`;

export const Extra = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  margin: calc(${V.spacing.large}*2) auto 0;

  @media ${M.media.tablet} {
    margin: ${V.spacing.large} auto 0;
  }

  @media ${M.media.mobileL} {
    flex-direction: column;
  }
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
  background: url('/img/jellyfish-purple.png') center center no-repeat;
  background-size: contain;
  height: auto;
  margin-left: 3em;
  width: 20%;

  @media ${M.media.mobileL} {
    display: none;
  }
`;
