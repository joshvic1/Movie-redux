import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer, // Assign movie reducer to the 'movies' store
  },
});

export default store;
