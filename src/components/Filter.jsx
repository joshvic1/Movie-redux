import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { Button, Select } from "antd";
import { Outlet } from "react-router-dom";
import AddNewMovie from "./AddNewMovie";

const Filter = ({
  setMyMovies,
  unFiltered,
  clearFilterBtnState,
  setClearFilterBtnState,
  setUnFiltered,
}) => {
  // state to manage state of filter button.

  // create filterValue  - to set state of filters inputs - this is important to clear inputs when 'clear filter' is clicked.
  const [filterValue, setFilterValue] = useState({
    search: "",
    rate: 1,
  });

  //filter movies by rating - function to be triggered onchange of rating.
  const filterByRate = (rate) => {
    const unaltered = unFiltered; // create a variable 'unaltered' to hold value of 'unfiltered'. unfiltered is a hook in App.jsx with initial value of myMovie
    let filteredMovies = unaltered.filter((item) => item.Rating === rate); // create new arr filtered movies to hold items filtered
    setMyMovies(filteredMovies); // set my movies to filtered movies
    setClearFilterBtnState(true); // set clear filterbtn state to true, so button can be displayed
  };

  // filter by title
  const filterByTitle = (title) => {
    if (title.trim() !== "") {
      // check to see that at least one non-space character was entered
      const unaltered = unFiltered;
      let filteredMovies = unaltered.filter((item) =>
        item.Title.toLowerCase().includes(title.toLowerCase().trim())
      );
      setMyMovies(filteredMovies);
      setClearFilterBtnState(true);
    }
  };

  // clear filter buttons function
  const clearFilterFunc = () => {
    setFilterValue({
      search: "",
      rate: "",
    });
    setMyMovies(unFiltered); // when clear button is clicked, revert to unfiltered
    setClearFilterBtnState(false); // then hide clear filter button
  };

  return (
    <>
      <div className="shadow-md shadow-orange-950 sticky top-[67px] flex flex-col-reverse sm:flex-row justify-around gap-2 my-0.5 place-items-center bg-white opacity-100 z-10 py-2 rounded-br-3xl">
        <div className="flex flex-col gap-1 sm:flex-row place-items-center w-fit">
          <Search
            value={filterValue.search} // set value to filter value which is gotten from filterValue state hook
            placeholder="Search Movie Title"
            onChange={(event) => {
              setFilterValue((preValue) => {
                return {
                  ...preValue,
                  search: event.target.value,
                };
              });
            }}
            onSearch={(value) => filterByTitle(value)}
            style={{
              width: 200,
            }}
          />
          <Select
            onChange={(value) => filterByRate(value)}
            defaultValue={{
              value: filterValue.rate,
              label: "Rating",
            }}
            style={{
              minWidth: 150,
            }}
            options={[
              {
                value: 1,
                label: "⭐",
              },
              {
                value: 2,
                label: "⭐⭐",
              },
              {
                value: 3,
                label: "⭐⭐⭐",
              },
              {
                value: 4,
                label: "⭐⭐⭐⭐",
              },
              {
                value: 5,
                label: "⭐⭐⭐⭐⭐",
              },
            ]}
            className="w-fit"
          />
          {/* hide filter button if state is false */}
          {clearFilterBtnState ? (
            <Button onClick={clearFilterFunc}>Clear Filter</Button>
          ) : null}
        </div>
        {/* render & pass props to AddMovie component - contains the modal and button to add new movie*/}
        <AddNewMovie
          setMyMovies={setMyMovies}
          clearFilterBtnState={clearFilterBtnState}
          setUnFiltered={setUnFiltered}
        />
      </div>
      <Outlet />
    </>
  );
};

export default Filter;
