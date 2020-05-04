import React from 'react';
import { node } from 'prop-types';

import * as S from './style';

export default function Container({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

Container.propTypes = {
  children: node.isRequired,
};
