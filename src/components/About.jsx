import React from 'react';
import remcel_pic from './assets/remcel_pic.png';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center  gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12 ">
        <SectionTitle>About Me</SectionTitle>
        <p className=" text-gray-300 text-2xl leading-relaxed">
          My name is Remcel. I'm a Full Stack Web Developer currently based in
          Taguig City, Philippines. I have serious passion for Web Development
          and creating solutions for complex problems.
        </p>
        <a
          href="mailto:webcifar.com"
          className=" text-gray-300 underline decoration-1 hover:text-indigo-500"
        >
          salmasanremcel@gmail.com
        </a>
      </div>

      <img
        src={remcel_pic}
        alt="Arfan"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
