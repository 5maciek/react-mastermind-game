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
    state = {
        currentRound: 1,
        secretCode: null,
        selectedColor: 'yellow',
        rounds: initialRounds,
    }

    handleNewGame = () => {
        if (window.confirm('Are you sure to start a new game?')) {
            const secretCode = this.RandomSecretCode();
            this.setState({
                currentRound: 1,
                secretCode: secretCode,
                rounds: initialRounds,
            });
        }
    }

    RandomSecretCode = () => {
        const secretCode = [];
        const colors = ['yellow', 'red', 'green', 'blue', 'white', 'orange', 'gray', 'pink'];
        for (let i = 0; i < 5; i++) {
            secretCode.push(colors[Math.floor(Math.random() * 5)]);
        }
        console.log(secretCode);
        return secretCode;
    }

    handleChangeSelectedColor = (event) => {
        document.querySelector('div.selectedColor').className = `selectedColor ${event.target.className}`;
        this.setState({
            selectedColor: event.target.className
        })
    }

    handlePickColorToCode = (event) => {        
        if (parseInt(event.target.parentElement.dataset.round) === this.state.currentRound) {
            const spanIndex = event.target.getAttribute('data-index');            
            const newRounds = [...this.state.rounds];
            newRounds[this.state.currentRound-1].playerCode[spanIndex] = this.state.selectedColor;            
            this.setState({
                 rounds: newRounds
            })
        }
        else{
            alert("Pick color to current round");
        }
    }

    validatePlayerCode = () => {
        console.log(this.state.rounds[this.state.currentRound - 1].playerCode);
        if (this.state.rounds[this.state.currentRound - 1].playerCode.includes(null)){
            alert('Fill all 5 fields');
            return false;
        }
        return true;
    }
    render() {
        return (
            <>
                <header>
                    <p>Secret Code</p>
                    <button className="newGame" onClick={this.handleNewGame}>New Game</button>
                </header>
                <main>
                    <ul>
                        {this.state.rounds.map(round => <Round key={round.id} round={round} currentRound={this.state.currentRound} pickColorToCode={this.handlePickColorToCode} />)}
                    </ul>
                </main>
                <footer>
                    <div className="selectedColor yellow">Selected color</div>
                    <div className="pickColor">
                        <span className="yellow" onClick={this.handleChangeSelectedColor}></span>
                        <span className="red" onClick={this.handleChangeSelectedColor}></span>
                        <span className="green" onClick={this.handleChangeSelectedColor}></span>
                        <span className="blue" onClick={this.handleChangeSelectedColor}></span>
                        <span className="white" onClick={this.handleChangeSelectedColor}></span>
                        <span className="orange" onClick={this.handleChangeSelectedColor}></span>
                        <span className="gray" onClick={this.handleChangeSelectedColor}></span>
                        <span className="pink" onClick={this.handleChangeSelectedColor}></span>
                    </div>
                    <button className="checkRound" onClick={this.RandomSecretCode}>Check round</button>
                </footer>
            </>
        )
    }
}

export default Game;