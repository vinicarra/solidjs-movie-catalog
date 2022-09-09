import { MoviePoster, Tag } from "@components/index";
import { useRouteData } from "@solidjs/router";
import type { Component } from "solid-js";
import { For, Show } from "solid-js";

import { MoviePageData } from "./MoviePage.data";

export const MoviePage: Component = () => {
  const [movie] = useRouteData<ReturnType<typeof MoviePageData>>();

  return (
    <Show when={!movie.loading} fallback={<h1>Loading</h1>}>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-6 p-4 md:px-32 md:py-12">
        <div class="w-full md:px-4">
          <MoviePoster movie={movie()!.data} interact={false} />
        </div>
        <div class="col-span-2">
          <h1 class="text-3xl md:text-5xl font-bold text-white">
            {movie()!.data.original_title}
          </h1>
          <div class="mt-6 flex gap-3 flex-wrap">
            <For each={movie()!.data.spoken_languages}>
              {(item) => (
                <Tag>
                  <span class="uppercase font-semibold">{item.iso_639_1}</span>
                </Tag>
              )}
            </For>
          </div>
          <p class="mt-3 text-white text-lg">{movie()!.data.overview}</p>
        </div>
      </div>
    </Show>
  );
};

export default MoviePage;
