import type { Component } from "solid-js";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { MoviesApi } from "@core/network";
import { IDiscover, IMovie } from "@core/models";

import styles from "./_catalog.module.scss";
import { MoviePoster } from "../../components/MoviePoster";

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
    <main class={styles.container}>
      <div class={styles.movieGrid}>
        <For each={movies()}>{(item) => <MoviePoster movie={item} />}</For>
        <div class={styles.scrollWatcher} id="scroll" />
      </div>
    </main>
  );
};
