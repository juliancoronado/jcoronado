import React from 'react';

// Components imports
import Welcome from './Welcome/Welcome';
import Links from './Links/Links';
import ProjectSection from './ProjectSection/ProjectSection';
import AboutMe from './AboutMe/AboutMe';

import './App.css'

function App() {

  return (
    <div className="app">
      <Welcome />
      <AboutMe />
      <ProjectSection />
      <Links />
      {/* <Donate /> */}
      <br></br>
      {/* <Wip /> */}
    </div>
  );
}

export default App;