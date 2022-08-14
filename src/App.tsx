import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import { CatalogPage } from "./pages/Catalog";
const MoviePage = lazy(() => import("./pages/Movie"));

const baseUrl = import.meta.env.PROD ? "/solidjs-movie-catalog" : "";

const App: Component = () => {
  return (
    <Routes base={baseUrl}>
      <Route path="/" component={CatalogPage} />
      <Route path="/movie" component={MoviePage} />
    </Routes>
  );
};

export default App;
