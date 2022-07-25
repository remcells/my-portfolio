import React, { useState } from 'react';

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-end items-center px-6 bg-black text-white h-16 font-bold">
      <ul className=" md:flex text-xl">
        <a href="#home">
          <li className="px-3 hover:text-indigo-500 cursor-pointer">Home</li>
        </a>
        <a href="#works">
          <li className="px-3 hover:text-indigo-500 cursor-pointer">Works</li>
        </a>
        <a href="#about">
          <li className="px-3 hover:text-indigo-500 cursor-pointer">About</li>
        </a>
        <a href="#contact">
          <li className="px-3 hover:text-indigo-500 cursor-pointer">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
