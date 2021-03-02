import React from 'react';
import './Project.css';

function Project({title, description, link }) {
    return (
        <div className="project">
            <text id="title"><a href = {link}>{title}</a></text><br></br>
            <text>{description}</text>
            <p></p>
        </div>
    );
}

export default Project;