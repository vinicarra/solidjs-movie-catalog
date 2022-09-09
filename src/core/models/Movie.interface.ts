type RGB = `rgb(${number}, ${number}, ${number})`;

export interface IMovieLanguage {
  name: string;
  iso_639_1: string;
}

export interface IMovie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  vote_average: string;

  spoken_languages: ReadonlyArray<IMovieLanguage>;
}

export class Movie {
  static _posterColors: RGB[] = [
    "rgb(194, 79, 21)",
    "rgb(180, 117, 23)",
    "rgb(190, 34, 20)",
  ];

  static getPosterColor(): RGB {
    return this._posterColors[
      Math.round(Math.random() * this._posterColors.length)
    ];
  }
}
