import { createResource } from "solid-js";
import { RouteDataFuncArgs } from "@solidjs/router/dist/types";
import { MoviesApi } from "@core/network";
import { IMovie } from "@core/models";

const fetchMovie = (id: string) => {
  return MoviesApi.get<IMovie>(`/movie/${id}`);
};

export function MoviePageData({ params }: RouteDataFuncArgs) {
  return createResource(params.id, fetchMovie);
}
