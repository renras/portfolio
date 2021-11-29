import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

interface Props {
  color?: string;
  backgroundColor?: string;
}

export const Button = styled.button<Props>`
  color: ${(props) => (props.color ? `${props.color}` : `var(--white)`)};
  font-family: var(--open-sans);
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px;
  background: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : `var(--grey-dark)`};
  border: none;
  border-radius: 5px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Section = () => {
  return (
    <Buttons>
      <Button>
        <a href="#footer">Contact Me</a>
      </Button>
      <Button backgroundColor={"var(--blue-green)"} color={"var(--black)"}>
        <a href="#work">Check My Work</a>
      </Button>
    </Buttons>
  );
};

export default Section;
