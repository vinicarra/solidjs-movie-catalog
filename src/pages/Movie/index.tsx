import type { Component } from "solid-js";
import { useRouteData } from "@solidjs/router";
import { MoviePageData } from "./MoviePage.data";

export const MoviePage: Component = () => {
  const [movie] = useRouteData<ReturnType<typeof MoviePageData>>();
  return <h2>{movie()?.data.original_title || "Loading"}</h2>;
};

export default MoviePage;
