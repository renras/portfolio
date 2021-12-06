import Nav from "./Nav";
import Logo from "./Logo";
import { AppBar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ background: "var(--bg-secondary)", padding: "30px 0" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Nav />
      </Container>
    </AppBar>
  );
};

export default Header;
