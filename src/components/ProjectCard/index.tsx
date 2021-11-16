import Image from 'next/image';

import * as S from './style';

type ProjectCardProps = {
  active?: boolean;
  cover: string;
  description: string;
  link?: string;
  name: string;
};

const ProjectCard = ({ active = true, cover, description, link = '', name }: ProjectCardProps) => {
  return (
    <S.Card>
      <S.Cover>
        <S.Image src={cover} alt={name} />
      </S.Cover>
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.Cta active={active} href={link}>
        <S.CtaText>{active ? 'Inscreva-se' : 'Em breve!'}</S.CtaText>
        {active && <Image src="/svg/icon-arrow.svg" width="24" height="12" />}
      </S.Cta>
    </S.Card>
  );
};

export default ProjectCard;
