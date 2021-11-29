import styled from "styled-components/macro";
import Header from "./Header";
import { data } from "../../data";
import Card from "./Card";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Work = () => {
  return (
    <Section id="work">
      <Header />
      <Cards>
        {data.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </Cards>
    </Section>
  );
};

export default Work;
