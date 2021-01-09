import React from 'react';
import './ProjectSection.css';
import Project from './Project';

function ProjectSection() {
    return (
        <div className="projectsection">
            <h2>Projects</h2>

            < Project title="Work in Progress" description="Placeholder description" link="/"/>
            < Project title="Work in Progress" description="Placeholder description" link="/"/>
            
        </div>
    );
}

export default ProjectSection;