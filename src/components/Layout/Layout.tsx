import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <Container>
        <Navigation />
      </Container>
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default Layout;
