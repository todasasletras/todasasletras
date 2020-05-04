import styled from 'styled-components';

import * as V from 'styles/variables';

export const Container = styled.div`
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 ${V.spacing.small};
  position: relative;
  width: calc(100% - 48px);
`;
