import styled from "styled-components";

const NavWrapper = styled.nav`
  font-family: var(--open-sans);
  max-width: 400px;
  width: 50%;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    font-size: 18px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--white);
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
