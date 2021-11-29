import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Work from "./Components/Work/Work";
import styled from "styled-components";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px;
  padding-bottom: 140px;
`;

function App() {
  return (
    <Section>
      <Header />
      <Main />
      <Work />
      <AboutMe />
      <Skills />
      <Footer />
    </Section>
  );
}

export default App;
