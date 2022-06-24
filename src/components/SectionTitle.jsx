import React from 'react';

function SectionTitle({ children, id }) {
  return (
    <h1 id={id && id} className="text-6xl font-bold mb-5 text-indigo-500 ">
      {children}
    </h1>
  );
}

export default SectionTitle;
