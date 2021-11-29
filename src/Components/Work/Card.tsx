import styled from "styled-components";
import Footer from "./CardFooter";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 367px;
  background: var(--grey-dark);
  box-shadow: 2px 2px 0px var(--blue-green);

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Section = ({ project }: any) => {
  return (
    <Card onClick={() => window.open(project.src)}>
      <Image src={project.img} />
      <Footer project={project} />
    </Card>
  );
};

export default Section;
