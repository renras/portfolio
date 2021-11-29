import styled from "styled-components";
import { Heading } from "../Main/Text";
import { P } from "../Main/Text";
import Tags from "./Tags";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5px 10px;
`;

const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardFooter = ({ project }: any) => {
  return (
    <Footer>
      <FooterHeader>
        <Heading as="h3" fontSize="14px">
          {project.name}
        </Heading>
        <Tags project={project} />
      </FooterHeader>
      <P fontSize="11px">{project.description}</P>
    </Footer>
  );
};

export default CardFooter;
