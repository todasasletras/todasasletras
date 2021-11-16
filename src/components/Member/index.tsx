import Image from 'next/image';

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
              <Image src="/svg/icon-linkedin.svg" width="20" height="20" />
            </S.Link>
          )}
          {social.twitter && (
            <S.Link href={`https://twitter.com/${social.twitter}`}>
              <Image src="/svg/icon-twitter.svg" width="20" height="20" />
            </S.Link>
          )}
          {social.instagram && (
            <S.Link href={`https://instagram.com/${social.instagram}`}>
              <Image src="/svg/icon-instagram.svg" width="20" height="20" />
            </S.Link>
          )}
        </S.Social>
      )}
    </S.Container>
  );
};

export default Member;
