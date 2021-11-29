import styled from "styled-components";
import { Button } from "../Main/Buttons";

const Tags = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled(Button)`
  padding: 2px 5px;
  background: var(--blue-green);
  color: black;
  font-size: 8px;
`;

const Section = ({ project }: any) => {
  return (
    <Tags>
      {project.tags.map((tag: string[], index: number) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  );
};

export default Section;
