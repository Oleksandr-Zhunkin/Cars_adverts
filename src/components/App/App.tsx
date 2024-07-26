import { Navigate, Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import "./App.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#3470ff",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
}

export default App;
