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
        <For each={movies()}>
          {(item) => (
            <div class={styles.movie}>
              <picture>
                <img
                  class={styles.poster}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  loading="lazy"
                />
              </picture>
              <div class={styles.smoke} />
              <div class={styles.movieContent}>
                <h4 class={styles.movieTitle}>{item.original_title}</h4>
              </div>
            </div>
          )}
        </For>
        <div class={styles.scrollWatcher} id="scroll" />
      </div>
    </main>
  );
};
