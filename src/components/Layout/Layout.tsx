import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <Navigation />

      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default Layout;
