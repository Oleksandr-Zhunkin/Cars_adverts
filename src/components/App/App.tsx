import { Navigate, Route, Routes } from "react-router";
import Container from "../Container/Container";
import Section from "../Section/Section";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import "./App.scss";

function App() {
  return (
    <Section>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Section>
  );
}

export default App;
