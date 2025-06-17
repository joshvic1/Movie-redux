import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieSlice";
export const store = configureStore({
  reducer: {
    movies: movieReducer, //Assign movie reducer to the movies key
  },
});
