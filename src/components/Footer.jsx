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
        <a href="https://github.com/remcells" target="_blank">
          <FaGithub className="mx-2" size={30} />
        </a>
        <a
          href="mailto: salmasanremcel@gmail.com?subject=Mailing to Remcel Salmasan"
          target="_blank"
        >
          <BsFillPersonLinesFill className="mx-2" size={30} />
        </a>
        <a href="https://www.facebook.com/remcel.salmasan" target="_blank">
          <FaFacebook className="mx-2" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/remcel-jonas-salmasan/"
          target="_blank"
        >
          <FaLinkedin className="mx-2" size={30} />
        </a>
      </div>
      <a
        href="mailto:salmasanremcel@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        salmasanremcel@gmail.com
      </a>

      <p className="text-xs mt-2 text-gray-500">
        © {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
