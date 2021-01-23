import React from 'react';

// Components imports
import Welcome from './Welcome';
import Wip from './Wip';
import Links from './Links';
import ProjectSection from './ProjectSection';
import AboutMe from './AboutMe';
import Donate from './Donate';

import './App.css'

function App() {

  return (
    <div className="app">
      <Welcome />
      <AboutMe />
      <ProjectSection />
      <Links />
      <Donate />
      <Wip />
    </div>
  );
}

export default App;