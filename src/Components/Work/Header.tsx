import styled from "styled-components/macro";
import { P } from "../Main/Text";
import Title from "./Title";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  max-width: 357px;
`;

const Section = () => {
  return (
    <Header>
      <Title title={"Work"} />
      <P fontSize="14px" textAlign="center">
        Check my non commercial projects. If you have any questions feel free to
        ask me for more information
      </P>
    </Header>
  );
};

export default Section;
