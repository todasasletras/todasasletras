import React from 'react';

import IconLinkedin from 'assets/svg/icon-linkedin.svg';
import IconTwitter from 'assets/svg/icon-twitter.svg';
import IconInstagram from 'assets/svg/icon-instagram.svg';

import * as S from './style';

type MemberProps = {
  memberRole: string;
  name: string;
  photo: string;
  social: socialProps;
};

type socialProps = {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
};

const Member = ({ memberRole, name, photo, social }: MemberProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={photo} alt={name} />
      </S.ImageContainer>
      <S.Name>{name}</S.Name>
      <S.Role>{memberRole}</S.Role>
      {social && (
        <S.Social>
          {social.linkedin && (
            <S.Link href={`https://www.linkedin.com/in/${social.linkedin}`}>
              <IconLinkedin />
            </S.Link>
          )}
          {social.twitter && (
            <S.Link href={`https://twitter.com/${social.twitter}`}>
              <IconTwitter />
            </S.Link>
          )}
          {social.instagram && (
            <S.Link href={`https://instagram.com/${social.instagram}`}>
              <IconInstagram />
            </S.Link>
          )}
        </S.Social>
      )}
    </S.Container>
  );
};

export default Member;
