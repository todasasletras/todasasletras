import styled from 'styled-components';

import * as V from 'styles/variables';
import * as M from 'styles/media';

export const Container = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 ${V.spacing.small};
  position: relative;
  width: 100%;

  @media ${M.media.tablet} {
    overflow: hidden;
  }
`;
