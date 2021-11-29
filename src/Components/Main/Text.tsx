import styled from "styled-components";

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Props {
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  textAlign?: string;
  lineHeight?: string;
}

export const P = styled.p<Props>`
  color: var(--white);
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "18px")};
  font-family: var(--open-sans);
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}` : "19px"};
  text-align: ${(props) => (props.textAlign ? `${props.textAlign}` : "left")};
  letter-spacing: 0.03em;
`;

export const Heading = styled.h2<Props>`
  color: var(--white);
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : "36px")};
  font-family: var(--roboto-slabs);
  font-weight: 400;
`;

const Highlight = styled.span`
  color: var(--blue-green);
`;

const Section = () => {
  return (
    <Text>
      <P>Hello, I'm Ren!</P>
      <Heading>
        I'm a <Highlight>Front End Developer</Highlight> who focuses on writing
        clean, elegant and efficient code.
      </Heading>
    </Text>
  );
};

export default Section;
