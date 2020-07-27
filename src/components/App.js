import React, { useState } from 'react';

// Components imports
import Welcome from './Welcome';
import Wip from './Wip';
import Links from './Links';
import Project from './Project';

import './App.css'

function App() {

  const [projects] = useState([
    { name: "Tetris AI", url: "https://github.com/juliancoronado/Tetris-AI", desc: "Genetic algorithm learns to play Tetris"},
    { name: "Floppy Bird", url: "url", desc: "Not a viral sensation?"},
    { name: "Minecraft 2", url: "url", desc: "The cake is real."}
  ]);

  return (
    <div className="app">
      <div id="firstbreak"></div>
      <text id="name">Julian Coronado</text>
      <div className="break"></div>
      <div className="main">
        { /* Center Items on Main page */}
        <Welcome />
        <div className="break"></div>
        <div id="projdiv">
          {projects.map(project => (
            <Project name={project.name} url={project.url} desc={project.desc} />
          ))}
        </div>
        <div className="break"></div>
        <Wip />
        <div className="break"></div>
        <Links />
      </div>
    </div>
  );
}

export default App;