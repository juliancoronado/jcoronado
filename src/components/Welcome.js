import React from 'react';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome">
            <text id="greeting"><span>Hi! My name is</span></text>
            <text id="nameline"><span>Julian Coronado.</span></text>
        </div>
    );
}

export default Welcome;