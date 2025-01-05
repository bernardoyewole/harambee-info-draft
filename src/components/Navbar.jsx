import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[80px] leading-[80px]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#0C1A28]">
          <a>Harambee</a>
        </h1>
        <ul className="flex space-x-4 text-[#0C1A28]">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
