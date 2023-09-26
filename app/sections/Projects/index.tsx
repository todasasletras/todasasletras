import Image from 'next/image'
import Container from '../../components/Container';

import * as S from './style';

const Projects = () => {
  return (
    <S.Section id="projetos">
      <Container>
        <S.Title>
          Nossos <br />
          projetos
        </S.Title>
        <S.Description>
          Nós elaboramos projetos focados na jornada profissional, compartilhando conhecimento e inserindo pessoas
          LGBTI+ no mercado de trabalho, com o objetivo de promover relevância na voz da comunidade e na busca por
          igualdade.
        </S.Description>
        <S.ProjectsContainer>
          <S.ProjectCard>
            <S.ProjectCardTitle>Para a comunidade LGBTQIA+</S.ProjectCardTitle>
            <S.ProjectCardList>
              <S.ProjectCardListItem>
                <Image
                  src="/svg/icon-scolarships.svg"
                  width={25}
                  height={25}
                  alt="Ícone bolsas de estudo"
                />
                Bolsas de estudo
              </S.ProjectCardListItem>
              <S.ProjectCardListItem>
                <Image
                  src="/svg/icon-formations.svg"
                  width={25}
                  height={25}
                  alt="Ícone Todas as Letras Escola"
                />
                Todas as Letras Escola
              </S.ProjectCardListItem>
            </S.ProjectCardList>
          </S.ProjectCard>
          <S.ProjectCard>
            <S.ProjectCardTitle>Para todos os públicos</S.ProjectCardTitle>
            <S.ProjectCardList>
              <S.ProjectCardListItem>
                <S.ProjectCardLink href="https://www.meetup.com/pt-BR/todasasletras">
                  <Image
                    src="/svg/icon-meetup.svg"
                    width={25}
                    height={25}
                    alt="Ícone encontros remotos"
                  />
                  Encontros remotos
                </S.ProjectCardLink>
              </S.ProjectCardListItem>
            </S.ProjectCardList>
          </S.ProjectCard>
        </S.ProjectsContainer>
        <S.Extra>
          <S.ExtraTitle>
            Imagine o que você pode construir com as <span>pessoas certas</span> do seu lado
          </S.ExtraTitle>
          <S.ExtraJellyfish />
        </S.Extra>
      </Container>
    </S.Section>
  );
};

export default Projects;
