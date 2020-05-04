import styled from 'styled-components';

import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Section = styled.section`
  background-color: ${V.color.grey};
  padding: ${V.spacing.large} 0;
`;

export const PartnersSection = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.medium};
  grid-template-columns: repeat(12, 1fr);

  &:not(:first-child) {
    margin-top: ${V.spacing.large};
  }
`;

export const PartnersType = styled.h3`
  grid-column: 1/-1;
  margin: 0 !important;
  ${T.titleSmall}
`;

export const PartnersList = styled.ul`
  display: grid;
  grid-column: 2/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.medium};
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PartnerItem = styled.li`
  text-align: center;
`;

export const PartnerLink = styled.a`
  &:hover img {
    opacity: 0.5;
  }
`;

export const PartnerImage = styled.img`
  height: 100%;
  max-height: 80px;
  mix-blend-mode: multiply;
  transition: opacity 0.5s ease;
`;
