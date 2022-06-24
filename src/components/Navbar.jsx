import React, { useState } from 'react';

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-end items-center px-6 bg-black text-white h-24 font-bold">
      {/* <div>
        <img src={Logo} alt="Logo Image" style={{ width: '200px' }} />
      </div> */}

      {/* menu */}
      <ul className=" md:flex text-2xl">
        <li className="px-3 hover:text-indigo-500 cursor-pointer">Home</li>
        <li className="px-3 hover:text-indigo-500 cursor-pointer">Works</li>
        <li className="px-3 hover:text-indigo-500 cursor-pointer">Skills</li>
        <li className="px-3 hover:text-indigo-500 cursor-pointer">Works</li>
        <li className="px-3 hover:text-indigo-500 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
