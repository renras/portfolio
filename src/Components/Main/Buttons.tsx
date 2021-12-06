import { Button, Stack } from "@mui/material";
import styled from "@emotion/styled";

const DarkButton = styled(Button)`
  background: var(--bg-secondary);
  font-weight: bold;

  &:hover {
    background: var(--bg-secondary-hover);
  }
`;

const GreenButton = styled(DarkButton)`
  background-color: var(--blue-green);
  color: var(--black);

  &:hover {
    background: var(--blue-green-hover);
  }
`;

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <DarkButton
        variant="contained"
        onClick={() => {
          window.location.href = "#footer";
        }}
        size="large"
      >
        Contact Me
      </DarkButton>
      <GreenButton
        variant="contained"
        onClick={() => {
          window.location.href = "#work";
        }}
        size="large"
      >
        Check My Work
      </GreenButton>
    </Stack>
  );
};

export default Buttons;
