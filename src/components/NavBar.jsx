// import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-[90%] mx-auto">
      <nav className="py-5 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">SHITTU IBRAHIM</h1>
        <div className="flex gap-4 items-center">
            <Link className="text-white" to={`/about`}>About me</Link>
            <Link className="text-white" to={`/resume`}>Resume</Link>
            <Link className="text-white" to={`/contact`}>Contact</Link>
            <Link className="text-white" to={`/extra`}>Extra</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
