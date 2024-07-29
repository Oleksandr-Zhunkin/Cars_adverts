import { Navigate, Route, Routes } from "react-router";
import "./App.scss";

import Layout from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage")
);

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
