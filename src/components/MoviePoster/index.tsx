import { Component } from "solid-js";
import { IMovie, Movie } from "@core/models";

import styles from "./_moviePoster.module.scss";

interface IMoviePosterProps {
  movie: IMovie;
}

export const MoviePoster: Component<IMoviePosterProps> = (props) => {
  return (
    <div class={styles.container}>
      <picture>
        <img
          class={styles.posterImg}
          alt="Movie poster"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          style={{ "background-color": Movie.getPosterColor() }}
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
  );
};
