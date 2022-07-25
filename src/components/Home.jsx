import React from 'react';

function Home() {
  return (
    <div
      id="home"
      className=" h-screen flex items-center justify-center flex-col py-20"
    >
      <h1 className="text-xl sm:text-8xl font-bold text-indigo-500">
        Hi, this is Remcel
      </h1>
      <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] py-5  text-right">
        I'm a Full Stack Developer.
      </h2>
      <p className=" py-5 max-w-[900px] text-gray-300 text-2xl text-center leading-12">
        I am a full stack developer who loves to create wonderful websites and
        digital experiences. I would love to code for you and I'm sure you would
        love it too.
      </p>
      <div className="text-center">
        <a
          href="#works"
          className="inline-block px-20 py-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-xl my-8"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default Home;
