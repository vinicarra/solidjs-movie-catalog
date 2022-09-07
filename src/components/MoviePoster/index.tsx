import { IMovie, Movie } from "@core/models";
import { Link } from "@solidjs/router";
import { Component } from "solid-js";

import styles from "./_moviePoster.module.scss";

interface IMoviePosterProps {
  movie: IMovie;
}

export const MoviePoster: Component<IMoviePosterProps> = (props) => {
  return (
    <Link href={`/movie/${props.movie.id}`}>
      <div class="relative w-full overflow-hidden aspect-2/3 group">
        <picture>
          <img
            class="absolute inset-0 w-full h-full object-fill transition-transform duration-300 ease-out group-hover:scale-110"
            alt="Movie poster"
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
            style={{ "background-color": Movie.getPosterColor() }}
          />
        </picture>
        <div
          class="absolute inset-0 w-full h-full"
          classList={{ [styles.fade]: true }}
        />
        <div class="absolute z-10 inset-0 flex items-end transition-[bottom] duration-200 ease-out group-hover:bottom-8">
          <h4 class="text-white px-4">{props.movie.original_title}</h4>
        </div>
        <div class="absolute left-0 right-0 bottom-0 opacity-0 translate-y-3/4 py-2 px-4 text-white group-hover:opacity-100 group-hover:translate-y-0 transition-transform transition-opacity duration-200 ease-out">
          <span>{props.movie.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};
