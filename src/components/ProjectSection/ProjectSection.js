import React from 'react';
import './ProjectSection.css';
import Project from '../Project/Project';

function ProjectSection() {
    return (
        <div className="projectsection">
            <h2>Projects</h2>

            < Project
            title="Minimal Bitcoin Widget"
            description="A minimal Android home-screen widget that displays the current price of Bitcoin."
            link="https://github.com/juliancoronado/MinimalBitcoinWidget"/>
            
        </div>
    );
}

export default ProjectSection;