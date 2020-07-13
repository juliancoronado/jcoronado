import React from 'react';
import './App.css';

function Project({name, url, desc}) {
    return(
        <div className="project">
            <text><span>{name}</span></text>
            <text><span>{url}</span></text>
            <text><span>{desc}</span></text>
        </div>
    );
}

export default Project;