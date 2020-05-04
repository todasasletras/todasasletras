import styled from 'styled-components';

import pattern from 'assets/img/pattern-about.png';
import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Section = styled.section`
  background: url(${pattern}) left top no-repeat;
  background-color: ${V.color.white};
  background-size: contain;
  padding: ${V.spacing.large} 0 0;
`;

export const Title = styled.h2`
  grid-column: 1/8;
  margin: 0 !important;
  ${T.title}
`;

export const Description = styled.div`
  grid-column: 8/-1;
`;

export const TextBlock = styled.p`
  ${T.text}

  &:not(:first-child) {
    margin-top: ${V.spacing.small};
  }
`;
