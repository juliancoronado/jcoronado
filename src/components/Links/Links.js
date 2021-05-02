import React from 'react';
import './Links.css';

function Links() {
    return(
        <div className="links">
            <h2>Links</h2>
            <text><span><a target="_blank" rel="noopener noreferrer" href="https://github.com/juliancoronado">GitHub</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/juliancoronado">LinkedIn</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="/resume.pdf">Resume</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="mailto:julian.c28@gmail.com">Email</a></span></text>
        </div>
    );
}

export default Links;