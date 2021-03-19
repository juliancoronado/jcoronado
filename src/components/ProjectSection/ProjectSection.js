import React from 'react';
import './ProjectSection.css';
import Project from '../Project/Project';

function ProjectSection() {
    return (
        <div className="projectsection">
            <h2>Projects</h2>

            < Project
            title="Minimal Bitcoin Widget"
            description="A beautiful Android home screen widget that displays the current price of Bitcoin."
            link="https://github.com/juliancoronado/MinimalBitcoinWidget"/>

            <h4>More projects coming soon!</h4>
            
        </div>
    );
}

export default ProjectSection;