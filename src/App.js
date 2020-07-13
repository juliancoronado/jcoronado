import React, { useState } from 'react';
import Welcome from './Welcome';
import Wip from './Wip';
import Links from './Links';
import Project from './Project';

function App() {

  const [projects] = useState([
    { name: "Tic Tac Tap", url: "url", desc: "Challenge your friends!"},
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