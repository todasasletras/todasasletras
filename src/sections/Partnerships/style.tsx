import styled from 'styled-components';

import * as V from 'styles/variables';
import * as T from 'styles/typography';
import * as M from 'styles/media';

export const Section = styled.section`
  background-color: ${V.color.grey};
  padding: ${V.spacing.large} 0;

  @media ${M.media.tablet} {
    padding: ${V.spacing.medium} 0;
  }
`;

export const PartnersSection = styled.div`
  align-items: start;
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
  grid-template-columns: repeat(12, 1fr);

  &:not(:first-child) {
    margin-top: ${V.spacing.large};
  }
`;

export const PartnersSectionEducational = styled.div`
  align-items: start;
  display: grid;
  grid-column: 1/7;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};

  @media ${M.media.tabletL} {
    grid-column: 1/-1;
  }
`;

export const PartnersSectionSupport = styled.div`
  align-items: start;
  display: grid;
  grid-column: 8/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};

  @media ${M.media.tabletL} {
    grid-column: 1/-1;
  }
`;

export const PartnersType = styled.h3`
  grid-column: 1/-1;
  margin: 0 !important;
  ${T.titleSmall}
`;

export const PartnersList = styled.ul`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${M.media.laptopM} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${M.media.tabletL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${M.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PartnersListEducational = styled.ul`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${M.media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PartnersListSupport = styled.ul`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${M.media.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PartnerItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const PartnerLink = styled.a`
  &:hover img {
    opacity: 0.5;
  }
`;

export const PartnerImage = styled.img`
  height: auto;
  max-height: 80px;
  max-width: 100%;
  mix-blend-mode: multiply;
  transition: opacity 0.5s ease;

  &[src$='.svg'] {
    min-height: 50px;
  }
`;
