import React from 'react';
import './Round.scss';

function Round(props) {
    const { id, playerCode, resultCode } = props.round;

    return (
        <li className="round">
            <div className="playerRoundCode">
                <p className="roundNumber">{id}.</p>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="resultRoundCode">
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
