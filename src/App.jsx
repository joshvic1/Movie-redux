import { moviesData } from "./data";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./pages/MovieList/MovieDetail";
import Filter from "./components/Filter";

function App() {
  // state to manage movies to be displayed
  const [myMovies, setMyMovies] = useState(moviesData);

  // state for filter button display
  const [clearFilterBtnState, setClearFilterBtnState] = useState(false);

  // movies to be displayed when no filter is applied
  const [unFiltered, setUnFiltered] = useState(myMovies);

  return (
    <div className="mb-8">
      <BrowserRouter>
        <Routes>
          {/* Main layout route to nest other pages/components */}
          <Route path="/" element={<MainLayout />}>
            <Route
              element={
                <Filter
                  setMyMovies={setMyMovies} // Component needs to able to setMyMovies
                  clearFilterBtnState={clearFilterBtnState}
                  setClearFilterBtnState={setClearFilterBtnState}
                  unFiltered={unFiltered}
                  setUnFiltered={setUnFiltered}
                />
              }
            >
              <Route
                index
                element={
                  myMovies.length === 0 ? (
                    <div className="text-center p-24 text-4xl font-extrabold">
                      Search did not return any result. Try again
                    </div>
                  ) : (
                    <MovieList myMovies={myMovies} />
                  )
                }
              />
            </Route>

            <Route
              path=":movieId"
              element={
                <MovieDetail
                  setMyMovies={setMyMovies}
                  unFiltered={unFiltered}
                  setClearFilterBtnState={setClearFilterBtnState}
                  myMovies={myMovies}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
