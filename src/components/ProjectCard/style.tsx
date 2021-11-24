import styled from 'styled-components';

import * as V from 'styles/variables';
import * as T from 'styles/typography';

type ProjectCardProps = {
  active: boolean;
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Cover = styled.div`
  background-color: ${V.color.lightPurple};
  height: 142px;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const Content = styled.div`
  background-color: ${V.color.grey};
  flex: 1;
  padding: ${V.spacing.small};
`;

export const Name = styled.h3`
  ${T.titleSmall}
`;

export const Description = styled.p`
  ${T.text}
  padding-top: ${V.spacing.small};
`;

export const Cta = styled.a<ProjectCardProps>`
  align-items: center;
  background-color: ${V.color.purple};
  color: ${V.color.white};
  display: flex;
  font-size: 15px;
  height: 58px;
  justify-content: space-between;
  letter-spacing: -0.03em;
  line-height: 58px;
  padding: 0 ${V.spacing.small};
  pointer-events: ${(props) => !props.active && 'none'};
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const CtaText = styled.span``;
