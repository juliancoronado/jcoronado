import React from 'react';
import './Links.css';

function Links() {
    return(
        <div className="links">
            <br></br>
            <text><span><a target="_blank" rel="noopener noreferrer" href="https://github.com/juliancoronado">GitHub</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/juliancoronado">LinkedIn</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="/jcoronado_resume.pdf" download>Resume</a></span></text>
            <text><span><a target="_blank" rel="noopener noreferrer" href="mailto:julian.c28@gmail.com">Contact</a></span></text>
        </div>
    );
}

export default Links;