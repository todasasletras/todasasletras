import styled from 'styled-components';

import * as V from 'styles/variables';
import * as T from 'styles/typography';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled.div`
  border: 6px solid ${V.color.white};
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const Name = styled.span`
  align-items: center;
  display: flex;
  height: ${V.spacing.medium};
  ${T.titleSmall}
  padding-top: ${V.spacing.tiny};
  text-align: center;
`;

export const Role = styled.span`
  font-size: 14px;
  line-height: 17px;
  padding-top: ${V.spacing.tiny};
  text-align: center;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${V.spacing.tiny};
  width: 100%;
`;

export const Link = styled.a`
  &:not(:first-child) {
    margin-left: ${V.spacing.tiny};
  }

  & svg {
    height: 20px;
    width: 20px;
  }
`;
