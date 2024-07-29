import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import Section from "../Section/Section";
import Container from "../Container/Container";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Navigation />

      <Section>
        <Container>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </>
  );
};

export default Layout;
