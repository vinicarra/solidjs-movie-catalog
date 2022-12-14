import { IMovie, Movie } from "@core/models";
import { Link } from "@solidjs/router";
import { Component, Show, createSignal, mergeProps } from "solid-js";

import placeholder from "../../assets/moviePosterPlaceholder.jpg";
import styles from "./_moviePoster.module.scss";

interface IMoviePosterProps {
  movie: IMovie;
  interact?: boolean;
}

export const MoviePoster: Component<IMoviePosterProps> = (props) => {
  const mProps = mergeProps({ interact: true }, props);

  const [imgStatus, setImgStatus] = createSignal<
    "loaded" | "error" | "loading"
  >("loading");

  return (
    <Link href={`movie/${mProps.movie.id}`}>
      <div class="relative w-full overflow-hidden aspect-2/3 group">
        <div>
          <Show when={imgStatus() !== "error"}>
            <img
              class="absolute inset-0 w-full h-full object-fill transition-transform duration-300 ease-out"
              classList={{
                "group-hover:scale-110": mProps.interact,
                "opacity-0": imgStatus() !== "loaded",
              }}
              alt={`${mProps.movie.original_title}'s poster`}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${mProps.movie.poster_path}`}
              style={{ "background-color": Movie.getPosterColor() }}
              onload={() => setImgStatus("loaded")}
              onerror={() => setImgStatus("error")}
            />
          </Show>
          <img
            class="absolute inset-0 w-full h-full object-fill blur-lg"
            classList={{
              hidden: imgStatus() === "loaded",
            }}
            src={placeholder}
          />
        </div>
        <Show when={mProps.interact}>
          <div
            class="absolute inset-0 w-full h-full"
            classList={{ [styles.fade]: true }}
          />
          <div class="absolute inset-0 flex items-end transition-[bottom] px-3 py-2 duration-200 ease-out group-hover:bottom-7">
            <h4 class="text-white">{mProps.movie.original_title}</h4>
          </div>
          <div class="absolute left-0 right-0 bottom-0 opacity-0 translate-y-3/4 py-2 px-3 text-white group-hover:opacity-100 group-hover:translate-y-0 transition-transform transition-opacity duration-200 ease-out">
            <span>{mProps.movie.vote_average}</span>
          </div>
        </Show>
      </div>
    </Link>
  );
};
