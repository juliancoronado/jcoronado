import React from 'react';
import './ProjectSection.css';
import Project from '../Project/Project';

function ProjectSection() {
    return (
        <div className="projectsection">
            <h2>Projects</h2>

            < Project title="Work In Progress" description="Placeholder description" link="/"/>
            
        </div>
    );
}

export default ProjectSection;