import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import { CatalogPage } from "./pages/Catalog";
const MoviePage = lazy(() => import("./pages/Movie"));

const App: Component = () => {
  return (
    <Routes base="/solidjs-movie-catalog">
      <Route path="/" component={CatalogPage} />
      <Route path="/movie" component={MoviePage} />
    </Routes>
  );
};

export default App;
