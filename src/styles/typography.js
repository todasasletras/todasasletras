import * as M from 'styles/media';

export const title = `
  font-size: 65px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 65px;
  margin: 0;


  @media ${M.media.tablet} {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const titleSmall = `
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin: 0;
`;

export const titleLarge = `
  font-weight: 700;
  font-size: 90px;
  line-height: 103px;
  letter-spacing: -0.03em;
  margin: 0;
`;

export const text = `
  font-weight: 400;
  font-size: 18px;
  line-height: 31px;
  margin: 0;
`;
