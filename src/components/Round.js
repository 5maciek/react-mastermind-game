import React from 'react';
import './Round.css';

function Round(props) {
    const { id, playerCode, resultCode } = props.round;

    return (
        <li className="round">
            <div className="playerCode">
                <p>{id}.</p>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="resultCode">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </li>
    );
}

export default Round;
