import React from "react";

const Navbar = () => {
  //Navbar component
  return (
    <nav className="shadow-orange-950  shadow-lg pl-16 flex items-center space-x-2 justify-center sticky top-0 z-10 bg-white bg-opacity-100">
      <h1 className="site--hdg  text-red-950 -rotate-6 hover:drop-shadow-2xl tracking-wide ">
        <span className="max-sm:hidden">FILM</span>
        <span>
          <img
            src="/logo-svg.svg"
            className="h-12 rotate-180 max-sm:rotate-0"
          />
        </span>
        <span>FREAKS</span>
      </h1>
    </nav>
  );
};

export default Navbar;
