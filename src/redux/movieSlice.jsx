import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  filterTitle: "",
  filterRate: 0,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movieList.push(action.payload);
    },
    setFilterTitle: (state, action) => {
      state.filterTitle = action.payload;
    },
    setFilterRate: (state, action) => {
      state.filterRate = action.payload;
    },
  },
});

export const { addMovie, setFilterTitle, setFilterRate } = movieSlice.actions;
export default movieSlice.reducer;
