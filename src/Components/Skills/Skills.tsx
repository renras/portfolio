import Title from "../Work/Title";
import styled from "styled-components";
import { data } from "./Data";
import { P } from "../Main/Text";

const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  gap: 50px 30px;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  gap: 50px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  fill: var(--blue-green);
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <Title title={"Skills"} />
      <Cards>
        {data.map((skill, index) => {
          return (
            <Card key={index}>
              <Icon src={skill.img} />
              <P fontSize="14px">{skill.description}</P>
            </Card>
          );
        })}
      </Cards>
    </SkillsWrapper>
  );
};

export default Skills;
