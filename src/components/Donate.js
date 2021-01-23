import React from 'react';
import './Donate.css';
import qrcode from './qrcode.png';

function Donate() {
    return(
        <div className="donate">
            <br></br>
            <text>Want to leave a tip? </text>
            <br></br>
            <text>BTC Address: bc1qgl229q3d929ten6ydtszs46tru845e9uk8lmje</text>
            <br></br>
            <img src={qrcode} alt=""/>
        </div>
    );
}

export default Donate;