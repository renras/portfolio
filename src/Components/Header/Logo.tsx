import styled from "styled-components";

const Initials = styled.h1`
  font-size: var(--large);
  color: var(--blue-green);
  font-family: var(--permanent-marker);
`;

const Logo = () => {
  return <Initials>RZV</Initials>;
};

export default Logo;
