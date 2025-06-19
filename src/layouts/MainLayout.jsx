import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

// The main layout to carry navbar and house other pages

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* display navbar */}
      <Outlet />
    </>
  );
};

export default MainLayout;
