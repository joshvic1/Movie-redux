import React from "react";
import { useDispatch } from "react-redux";
import { setFilterRate, setFilterTitle } from "../redux/movieSlice";

const Filter = () => {
  const dispatch = useDispatch(); // Used to send actions to the Redux store
  return (
    <div className="mt-3 mb-3 gap-3 d-flex justify-content-center">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => dispatch(setFilterTitle(e.target.value))} // Update title filter
      />
      <input
        type="number"
        placeholder="Minimum rate"
        onChange={(e) => dispatch(setFilterRate(Number(e.target.value)))} // Update rate filter
      />
    </div>
  );
};

export default Filter;
