import React from 'react';
import Welcome from './Welcome';
import Wip from './Wip';
import Links from './Links';
import Project from './Project';

function App() {

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
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
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