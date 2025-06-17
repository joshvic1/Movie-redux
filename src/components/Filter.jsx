import React from "react";

const Filter = () => {
  return (
    <div className="mt-3 mb-3 gap-3 d-flex justify-content-center">
      <input type="text" placeholder="Search by title" />
      <input type="number" placeholder="Minimum rate" />
    </div>
  );
};

export default Filter;
