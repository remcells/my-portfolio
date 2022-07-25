import React from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <SectionTitle> Contact Me</SectionTitle>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="px-20 py-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-xl my-8">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
