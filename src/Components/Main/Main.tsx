import styled from "styled-components";
import Image from "./Image";
import Buttons from "./Buttons";
import Text from "./Text";
import image from "../../images/profile-picture.jpg";

const Main = styled.section`
  padding: 0 140px;
  display: flex;
  justify-content: center;
`;

const Hero = styled.div`
  margin-top: 250px;
  display: flex;
  gap: 100px;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 566px;
  gap: 60px;
  margin-top: 70px;
`;

const Section = () => {
  return (
    <Main>
      <Hero>
        <Introduction>
          <Text />
          <Buttons />
        </Introduction>
        <Image img={image} />
      </Hero>
    </Main>
  );
};

export default Section;
