import React from 'react';

// Components imports
import Welcome from './Welcome';
import Wip from './Wip';
import Links from './Links';
import Projects from './Projects';
import AboutMe from './AboutMe';

import './App.css'

function App() {

  return (
    <div className="app">
      <Welcome />
      <AboutMe />
      <Projects />
      <Wip />
      <Links />
    </div>
  );
}

export default App;