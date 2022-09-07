import { Component } from "solid-js";

import styles from "./_moviePoster.module.scss";

export const MoviePosterPlaceholder: Component = () => {
  return (
    <div class="w-full h-full aspect-2/3 bg-gray-700 flex items-center justify-center">
      <span class="text-red-400">
        <i class="fa fa-spinner animate-spin"></i>
      </span>
    </div>
  );
};
