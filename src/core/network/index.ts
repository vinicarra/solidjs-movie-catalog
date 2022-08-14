import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWQwOGM5MGVjNTU3OTQ0MGEzMDRlMTA0ODY0ODY1MCIsInN1YiI6IjYyOTExMDExZmI4MzQ2MDA5YmFiNDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dpYy08AZFDJ-MY4QQdc5fhjzZYenLAQiVsiWuvLY8TU",
  },
});
