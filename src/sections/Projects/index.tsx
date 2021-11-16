import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';
import projects from 'data/projects';

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
          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project.name}
                cover={project.img}
                name={project.name}
                description={project.description}
                link={project.url}
                active={project.active}
              />
            ))}
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
