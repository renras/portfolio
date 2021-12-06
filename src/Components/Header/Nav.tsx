import { Stack, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  color: var(--white);
  font-size: 1rem;
  text-transform: capitalize;

  &:hover {
    background: var(--bg-secondary-hover);
  }
`;

const Nav = () => {
  return (
    <Stack direction="row" spacing={10} sx={{ fontFamily: "var(--open-sans)" }}>
      <StyledButton href="#work">Work</StyledButton>
      <StyledButton href="#about">About</StyledButton>
      <StyledButton href="#footer">Contact</StyledButton>
    </Stack>
  );
};

export default Nav;
