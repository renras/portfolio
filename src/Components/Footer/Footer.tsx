import styled from "styled-components";
import { Heading } from "../Main/Text";
import { P } from "../Main/Text";
import icon1 from "../../images/SVGs/facebook.svg";
import icon2 from "../../images/SVGs/github.svg";
import icon3 from "../../images/SVGs/gmail.svg";
import icon4 from "../../images/SVGs/phone.svg";

const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

const Item = styled(P)`
  display: flex;
  gap: 10px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

const Contact = () => {
  return (
    <FooterWrapper id="footer">
      <Header>
        <Heading fontSize="48px">Let's work together...</Heading>
        <P fontSize="24px">How do you take your coffee?</P>
      </Header>
      <List>
        <Item
          as="li"
          onClick={() =>
            window.open("https://www.facebook.com/renzo.visperas.1/")
          }
        >
          <Icon src={icon1} />
          Facebook
        </Item>
        <Item as="li" onClick={() => window.open("https://github.com/renras")}>
          <Icon src={icon2} />
          Github
        </Item>
        <Item as="li">
          <Icon src={icon3} />
          renzovisperas07@gmail.com
        </Item>
        <Item as="li">
          <Icon src={icon4} />
          +09455820565
        </Item>
      </List>
    </FooterWrapper>
  );
};

export default Contact;
