import { Component } from "solid-js";
import { IMovie } from "@core/models";

import styles from "./_moviePoster.module.scss";
import { Link } from "@solidjs/router";

interface IMoviePosterProps {
  movie: IMovie;
}

export const MoviePoster: Component<IMoviePosterProps> = (props) => {
  return (
    <Link href={`/movie/${props.movie.id}`}>
      <div class={styles.container}>
        <picture>
          <img
            class={styles.posterImg}
            alt="Movie poster"
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          />
        </picture>
        <div class={styles.fade} />
        <div class={styles.content}>
          <h4 class={styles.title}>{props.movie.original_title}</h4>
        </div>
        <div class={styles.extraInfo}>
          <span>{props.movie.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};
