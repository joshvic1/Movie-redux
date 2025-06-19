import React from "react";
import MovieCard from "../../components/MovieCard";

const MovieList = ({ myMovies }) => {
  return (
    <>
      {/* // movieList Component to hold all movies being displayed */}
      <div className="max-w-4xl mt-8 mx-auto ">
        <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myMovies.map((item) => (
            <MovieCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
