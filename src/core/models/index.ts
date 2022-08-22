export type { IDiscover } from "./Discover.interface";
export type { IMovie } from "./Movie.interface";
export { Movie } from "./Movie.interface";

export interface IPaginatedResource<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[];
}
