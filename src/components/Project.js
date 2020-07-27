import React from 'react';
import './Project.css';

function Project({name, url, desc}) {
    return(
        <div className="project">
            <text><span>{name}</span></text>
            <text><span>{desc}</span></text>
            <text><span><a href={url} target="_blank">Github Link</a></span></text>
        </div>
    );
}

export default Project;