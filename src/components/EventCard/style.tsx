import styled from 'styled-components';

import * as V from 'styles/variables';

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

export const NameContainer = styled.div`
  align-items: center;
  background-color: ${V.color.grey};
  display: flex;
  height: 70px;
  justify-content: flex-start;
  padding: 0 ${V.spacing.small};
`;

export const Name = styled.h3`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-transform: uppercase;
`;

export const Content = styled.div`
  align-items: flex-start;
  background-color: ${V.color.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: ${V.spacing.small};
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 23px;
  margin: 0;
`;

export const Info = styled.div`
  margin-top: 22px;
`;

export const InfoItem = styled.div`
  align-items: center;
  display: flex;
`;

export const InfoIcon = styled.span`
  text-align: center;
  width: ${V.spacing.small};
`;

export const InfoText = styled.span`
  color: ${V.color.purple};
  display: block;
  font-size: 16px;
  line-height: 34px;
  margin-left: ${V.spacing.tiny};
`;

export const Cta = styled.a`
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
