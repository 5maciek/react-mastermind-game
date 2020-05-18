import React from 'react'
import Round from './Round'
import './Game.scss'

const initialRounds = [{
    id: 1,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 2,
    playerCode: ['red', 'green', 'blue', 'yellow', 'red'],
    resultCode: ['X', 'O', 'X', 'O', null],
    done: false
}, {
    id: 3,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 4,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 5,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 6,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 7,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 8,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 9,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 10,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 11,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}, {
    id: 12,
    playerCode: [null, null, null, null, null],
    resultCode: [null, null, null, null, null],
    done: false
}];

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            currentColor: null,
            currentRound: 1,
            secretCode: null,
            selectedColor: 'yellow',
            rounds: initialRounds,            
        }        
    }

    handleChangeSelectedColor = (event) => {
        document.querySelector('div.selectedColor').className = `selectedColor ${event.target.className}`; 
        this.setState({
            selectedColor: event.target.className
        })       
    }

    render() {
        return (
            <>
                <header>
                    <p>Secret Code</p>
                    <button className="newGame">New Game</button>
                </header>
                <main>
                    <ul>
                        {this.state.rounds.map(round => <Round key={round.id} round={round} />)}
                    </ul>
                </main>
                <footer>
                    <div className="selectedColor yellow">Selected color</div>
                    <div className="pickColor">
                        <span className="yellow" onClick = {this.handleChangeSelectedColor}></span>
                        <span className="red" onClick = {this.handleChangeSelectedColor}></span>
                        <span className="green"onClick = {this.handleChangeSelectedColor}></span>
                        <span className="blue"onClick = {this.handleChangeSelectedColor}></span>
                        <span className="white"onClick = {this.handleChangeSelectedColor}></span>
                        <span className="orange"onClick = {this.handleChangeSelectedColor}></span>
                        <span className="gray"onClick = {this.handleChangeSelectedColor}></span>
                        <span className="pink"onClick = {this.handleChangeSelectedColor}></span>
                    </div>
                    <button className="checkRound" onClick = {this.handleChangeSelectedColor}>Check round</button>
                </footer>
            </>
        )
    }
}

export default Game;