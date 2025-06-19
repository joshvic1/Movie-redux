import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const MovieDetail = ({
  setMyMovies,
  unFiltered,
  setClearFilterBtnState,
  myMovies,
}) => {
  const navigate = useNavigate(); // assign useNavigate to navigate
  const { movieId } = useParams(); // destructure movieId from useparams
  const [theMovie, setTheMovie] = useState(null); // initialize state of the movie to be displayed
  const [loading, setLoading] = useState(true); //

  // a function to check the movieID clicked against id's of movies on display
  function findMovieId() {
    let theMovie = myMovies.find((item) => Number(item.id) === Number(movieId));
    setTheMovie(theMovie);
    return theMovie;
  }

  // useEffect Hook to run functions after first render
  useEffect(() => {
    findMovieId();
    setTimeout(() => setLoading(false), 1000);
  });

  // function to be triggered when home button is clicked from within a movie detail
  function returnHome() {
    setMyMovies(unFiltered);
    setClearFilterBtnState(false);
    navigate("/");
  }

  // loader
  if (loading) {
    return (
      <div className="grid place-items-center h-screen ">
        <h1>Fetching Trailer...</h1>
      </div>
    );
  }
  return (
    <>
      <Button
        icon={<HomeOutlined />}
        className="m-8 top-8 z-10 sticky"
        onClick={returnHome}
      >
        Back Home
      </Button>
      <div className="p-8  flex flex-col md:flex-row gap-8 text-center">
        <iframe
          className="w-full h-[75vh] rounded-lg border-none"
          src={theMovie.TrailerURL}
          title="Murder Mystery 2 | Official Trailer | Netflix"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col w-full shadow-md px-12">
          <h2 className="text-orange-950 text-2xl font-extrabold">
            {theMovie.Title}
          </h2>
          <h4>SYNOPSIS</h4>
          <br />
          <p className="text-lg py-8">{theMovie.Description}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
