import styled from 'styled-components';

import * as V from 'styles/variables';
import * as T from 'styles/typography';
import * as M from 'styles/media';

export const Section = styled.section`
  background: url('/img/pattern-about.png') left top no-repeat;
  background-color: ${V.color.white};
  background-size: contain;
  padding: ${V.spacing.large} 0 0;

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

export const Description = styled.div`
  grid-column: 8/-1;

  @media ${M.media.tablet} {
    grid-column: 1/10;
    padding-top: ${V.spacing.small};
  }

  @media ${M.media.mobileM} {
    grid-column: 1/-1;
  }
`;

export const TextBlock = styled.p`
  ${T.text}

  &:not(:first-child) {
    margin-top: ${V.spacing.small};
  }
`;
