import React from 'react';
import Home from './Components/Home.js';
import About from './Components/About.js';
import WhatWeDo from './Components/WhatWeDo.js';
import Contact from './Components/Contact.js';


const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <WhatWeDo />
      <Contact />
    </div>
  );
}

export default App;
