import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { movieList, filterTitle, filterRate } = useSelector(
    (state) => state.movies
  );
  const filteredMovies = movieList.filter(
    () =>
      movieList.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movieList.rate >= filterRate
  );
  return (
    <div>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
