import styled from 'styled-components';
import Image from 'next/image';

import * as V from 'styles/variables';
import * as M from 'styles/media';

export const ImageComponent = styled(Image)``;

export const Logo = styled.div`
  position: relative;
  height: 150px;
  width: 300px;
`;

export const Main = styled.main`
  background: url('/img/pattern-immersion.png') right center no-repeat;
  background-color: ${V.color.black};
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  grid-column: 1/6;
  justify-content: flex-end;
  margin-top: ${V.spacing.medium};

  @media ${M.media.tabletM} {
    grid-column: 1/-1;
  }
`;

export const Title = styled.h2`
  color: ${V.color.black};
  font-family: 'Space Mono';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.11em;
  line-height: 137.6%;
  margin: ${V.spacing.medium} 0 0;
  text-transform: uppercase;

  & span {
    background-color: ${V.color.white};
    display: inline-block;
    margin-bottom: 4px;
  }
`;

export const LogoSolo = styled.div`
  position: relative;
  height: 50px;
  width: 70px;
`;

export const Button = styled.a`
  align-items: center;
  color: ${V.color.black};
  cursor: pointer;
  background-color: ${V.color.immersion.yellow};
  border-color: ${V.color.immersion.yellow};
  border-style: solid;
  border-width: 3px;
  display: flex;
  font-family: 'Space Mono';
  font-size: 20px;
  font-weight: 700;
  height: 62px;
  justify-content: space-between;
  margin-top: ${V.spacing.small};
  max-width: 270px;
  padding: ${V.spacing.tiny};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transform-style: preserve-3d;
  transition: background-color 0.5s ease;
  width: 100%;

  &:after {
    background-color: ${V.color.immersion.yellow};
    content: '';
    height: inherit;
    left: -8px;
    opacity: 0;
    position: absolute;
    top: 4px;
    transform: translateZ(-1px);
    transition: all 0.5s ease;
    width: inherit;
  }

  &:hover {
    background-color: ${V.color.black};
    color: ${V.color.immersion.yellow};

    &:after {
      opacity: 1;
    }
  }
`;

export const ContainerPhoto = styled.div`
  background: url('/img/photo-immersion.png') top center no-repeat;
  background-size: cover;
  grid-column: 6/-1;
  height: 60vh;
  margin-top: ${V.spacing.medium};

  @media ${M.media.tabletM} {
    display: none;
  }
`;

export const ContainerPartnerships = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
  grid-template-columns: repeat(12, 1fr);
  padding-top: ${V.spacing.medium};

  @media ${M.media.tabletM} {
    background-color: ${V.color.black};
    margin-top: ${V.spacing.small};
  }
`;

export const Partnerships = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Partnerships1 = styled(Partnerships)`
  grid-column: 1/4;

  @media ${M.media.tabletM} {
    grid-column: 1/-1;
  }
`;

export const Partnerships2 = styled(Partnerships)`
  grid-column: 4/9;

  @media ${M.media.tabletM} {
    grid-column: 1/-1;
  }
`;

export const Partnerships3 = styled(Partnerships)`
  grid-column: 9/-1;

  @media ${M.media.tabletM} {
    grid-column: 1/-1;
  }
`;

export const PartnershipsTitle = styled.h3`
  color: ${V.color.immersion.neutralPrimary};
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  margin: 0;
  padding: 0 0 ${V.spacing.tiny} 0;
  text-align: center;
  text-transform: uppercase;
`;

export const PartnersLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: ${V.spacing.small};
`;

export const PartnerLogo = styled.div`
  position: relative;
  height: 70px;
  width: 90px;
`;
