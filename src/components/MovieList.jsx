import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { movieList, filterTitle, filterRate } = useSelector(
    (state) => state.movies
  );

  const filteredMovies = movieList.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rate >= filterRate
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
