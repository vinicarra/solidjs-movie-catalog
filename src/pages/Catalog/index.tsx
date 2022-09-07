import { MoviePoster, MoviePosterPlaceholder, Navbar } from "@components/index";
import { IDiscover, IMovie } from "@core/models";
import { MoviesApi } from "@core/network";
import type { Component } from "solid-js";
import {
  For,
  Show,
  createEffect,
  createResource,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";

import styles from "./_catalog.module.scss";

const fetchMovies = (page: number) => {
  return MoviesApi.get<IDiscover>(`/discover/movie?page=${page}`);
};

export const CatalogPage: Component = () => {
  let observer: IntersectionObserver;

  const [page, setPage] = createSignal(1);
  const [movies, setMovies] = createSignal<IMovie[]>([]);
  const [res] = createResource(page, fetchMovies);

  createEffect(() => {
    const data = res()?.data.results;
    if (data) {
      setMovies((curr) => [...curr, ...data]);
    }
  });

  const loadMore = (entry: IntersectionObserverEntry) => {
    if (!res.loading && entry.isIntersecting) {
      setPage((p) => p + 1);
    }
  };

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => entries.length && loadMore(entries[0]),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    const target = document.querySelector("#scroll");
    if (target) {
      observer.observe(target);
    }
  });

  onCleanup(() => {
    observer.disconnect();
  });

  return (
    <main class="relative h-100 bg-background max-w-full">
      <Navbar />
      <div class="relative py-4 w-11/12 m-auto grid grid-cols-catalog gap-3">
        <For each={movies()}>{(item) => <MoviePoster movie={item} />}</For>
        <div
          class="absolute w-20 aspect-square bottom-10 left-1/2"
          id="scroll"
        />
      </div>
      <Show when={res.loading}>
        <div class="w-full py-4 flex justify-center">
          <span class="text-3xl text-red-400">
            <i class="fa fa-spinner animate-spin"></i>
          </span>
        </div>
      </Show>
    </main>
  );
};
