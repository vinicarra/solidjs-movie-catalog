type RGB = `rgb(${number}, ${number}, ${number})`;

export interface IMovie {
  id: number;
  original_title: string;
  poster_path: string;
  adult: boolean;
  vote_average: string;
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
