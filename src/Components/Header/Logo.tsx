import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledTypography = styled(Typography)`
  color: var(--blue-green);
  font-family: var(--permanent-marker);
  font-size: 2rem;
`;

const Logo = () => {
  return <StyledTypography variant="h1">RZV</StyledTypography>;
};

export default Logo;
