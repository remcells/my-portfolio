import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Works from './components/Works';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-900 min-h-screen ">
        <div className="max-w-7xl w-10/12 mx-auto">
          <Home />
          <Works />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
