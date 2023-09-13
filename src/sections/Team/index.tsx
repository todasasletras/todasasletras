import Container from 'components/Container';
import Member from 'components/Member';
import team from 'data/team';

import * as S from './style';

const Team = () => {
  return (
    <S.Section id="equipe">
      <Container>
        <S.Title>
          Nossa <br />
          Equipe
        </S.Title>
        <S.Description>
          Conheça nossa equipe que, desde 2018, trabalha na criação de conteúdo, captação de patrocínio e organização de
          encontros.
        </S.Description>
        <S.TeamContainer>
          <S.Team>
            {team &&
              team.map((member) => (
                <Member
                  key={member.name}
                  photo={member.photo}
                  name={member.name}
                  memberRole={member.role}
                  social={member.social}
                />
              ))}
          </S.Team>
          <S.Extra>
            Fazemos <br />
            mais quando <br />
            fazemos <br />
            juntos
          </S.Extra>
        </S.TeamContainer>
      </Container>
    </S.Section>
  );
};

export default Team;
