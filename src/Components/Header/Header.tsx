import Nav from "./Nav";
import Logo from "./Logo";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  padding: 30px 140px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: var(--black);
  justify-content: center;
`;

const Content = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  max-width: 1100px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Content>
        <Logo />
        <Nav />
      </Content>
    </HeaderWrapper>
  );
};

export default Header;
