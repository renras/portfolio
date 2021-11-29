import Image from "../Main/Image";
import img from "../../images/about-me.jpeg";
import styled from "styled-components";
import { Introduction } from "../Main/Main";
import Title from "../Work/Title";
import { P } from "../Main/Text";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Text = styled(Introduction)`
  margin-top: 0;
`;

const AboutMe = () => {
  return (
    <Section id="about">
      <Image img={img} />
      <Text>
        <Title title={"About Me"} />
        <P lineHeight="36px">
          My name is Renzo Visperas. I like to craft solid and scalable frontend
          products with great user experiences. I use best practices and web
          standards guidelines, resulting in semantic HTML and CSS.{" "}
        </P>
        <P lineHeight="36px">
          For building my projects, I like to design my layout using Figma, then
          Visual Studio Code to produce clean semantic HTML and CSS. I like to
          build my user interfaces using a JavaScript library called React. I
          also implement Typescript to have more control over my project and for
          efficient development.
        </P>
      </Text>
    </Section>
  );
};

export default AboutMe;
