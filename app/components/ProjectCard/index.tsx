import IconArrow from 'assets/svg/icon-arrow.svg';

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
        {active && <IconArrow />}
      </S.Cta>
    </S.Card>
  );
};

export default ProjectCard;
