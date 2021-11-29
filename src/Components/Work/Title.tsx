import styled from "styled-components";
import { Heading } from "../Main/Text";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const Underline = styled.div`
  width: 65px;
  background: #00c9c8;
  height: 5px;
`;

const Title = ({ title }: { title: string }) => {
  return (
    <TitleWrapper>
      <Heading fontSize="48px">{title}</Heading>
      <Underline />
    </TitleWrapper>
  );
};

export default Title;
