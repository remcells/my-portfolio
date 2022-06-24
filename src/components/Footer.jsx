import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Remcel Salmasan
      </a>
      <div className="flex text-center justify-center py-3 px-2">
        <a href="">
          <FaGithub className="mx-2" size={30} />
        </a>
        <a href="">
          <BsFillPersonLinesFill className="mx-2" size={30} />
        </a>
        <a href="">
          <FaFacebook className="mx-2" size={30} />
        </a>
        <a href="">
          <FaLinkedin className="mx-2" size={30} />
        </a>
      </div>
      <a
        href="mailto:webcifar@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        salmasanremcel@email.com
      </a>

      <p className="text-xs mt-2 text-gray-500">
        © {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
