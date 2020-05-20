import React from 'react';
import './Round.scss';

function Round(props) {
    const { id, playerCode, resultCode, done } = props.round;
    let futureRoundClass = false;
    if (id !== props.currentRound && done === false) {
        futureRoundClass = true;
    }

    return (
        <li className="round" data-round={id}>
            <div className={futureRoundClass ? "playerRoundCode futureRound" : "playerRoundCode"} data-round={id}>
                <p className="roundNumber">{id}.</p>
                {playerCode.map((item, index) => <span key={index} data-index={index} className={item} onClick={props.pickColorToCode}></span>)}                }
            </div>
            <div className={futureRoundClass ? "resultRoundCode futureRound" : "resultRoundCode"} data-round={id}>
                {resultCode.map((item, index) => <span key={index} data-index={index} className={item}></span>)}
            </div>
        </li>
    );
}

export default Round;
