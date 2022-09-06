import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import { CatalogPage } from "./pages/Catalog";
import { MoviePageData } from "./pages/Movie/MoviePage.data";
const MoviePage = lazy(() => import("./pages/Movie"));

const baseUrl = import.meta.env.PROD ? "/solidjs-movie-catalog" : "";

const App: Component = () => {
  return (
    <Routes base={baseUrl}>
      <Route path="/" component={CatalogPage} />
      <Route path="/movie/:id" component={MoviePage} data={MoviePageData} />
    </Routes>
  );
};

export default App;
