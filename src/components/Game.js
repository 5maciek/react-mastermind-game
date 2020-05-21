import React from 'react'
import Round from './Round'
import './Game.scss'

class Game extends React.Component {
    state = {
        disabled: true,
        success: false,
        currentRound: 0,
        secretCode: null,
        selectedColor: 'yellow',
        rounds: [{
            id: 1,
            playerCode: [null, null, null, null, null],
            resultCode: [null, null, null, null, null],
            done: false
        }, {
            id: 2,
            playerCode: [null, null, null, null, null],
            resultCode: [null, null, null, null, null],
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
        }],
    }

    handleNewGame = () => {
        if (window.confirm('Are you sure to start a new game?')) {
            const secretCode = this.RandomSecretCode();
            console.log(secretCode);
            document.querySelector('button.newGame').classList.remove('firstOpen');
            this.setState({
                success: false,
                disabled: false,
                currentRound: 0,
                secretCode: secretCode,
                rounds: [{
                    id: 1,
                    playerCode: [null, null, null, null, null],
                    resultCode: [null, null, null, null, null],
                    done: false
                }, {
                    id: 2,
                    playerCode: [null, null, null, null, null],
                    resultCode: [null, null, null, null, null],
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
                }]
            });
        }
    }

    RandomSecretCode = () => {
        const secretCode = [];
        const colors = ['yellow', 'red', 'green', 'blue', 'white', 'orange', 'gray', 'pink'];
        for (let i = 0; i < 5; i++) {
            secretCode.push(colors[Math.floor(Math.random() * 8)]);
        }
        return secretCode;
    }

    handleChangeSelectedColor = (event) => {
        document.querySelector('div.selectedColor').className = `selectedColor ${event.target.className}`;
        this.setState({
            selectedColor: event.target.className
        })
    }

    handleChangeOneColorInPlayerCode = (event) => {
        if (parseInt(event.target.parentElement.dataset.round) === this.state.currentRound) {
            const spanIndex = event.target.getAttribute('data-index');
            const newRounds = [...this.state.rounds];
            newRounds[this.state.currentRound - 1].playerCode[spanIndex] = this.state.selectedColor;
            this.setState({
                rounds: newRounds
            })
        }
        else {
            alert("Pick color to current round");
        }
    }

    handleCheckCode = () => {
        if (this.validatePlayerCode()) {
            const resultCode = [];
            const copyState = JSON.parse(JSON.stringify(this.state))
            const { secretCode, rounds, currentRound } = copyState;
            const playerCode = copyState.rounds[currentRound - 1].playerCode;

            secretCode.forEach((item, index) => {
                if (item === rounds[currentRound - 1].playerCode[index]) {
                    resultCode.push('black');
                    playerCode[index] = null;
                    secretCode[index] = null;
                }
            })
            playerCode.forEach((item, index) => {
                if (secretCode.includes(item) && item !== null) {
                    resultCode.push('white');
                    const indexSecretCode = secretCode.indexOf(item);
                    secretCode[indexSecretCode] = null;
                }
            })

            if (resultCode.length < 5) {
                for (let i = resultCode.length; i < 5; i++) {
                    resultCode.push(null);
                }
            }

            const newRounds = [...this.state.rounds];
            newRounds[this.state.currentRound - 1].resultCode = resultCode;
            newRounds[this.state.currentRound - 1].done = true;
            let success = false;
            if (resultCode.every(item => item === "black")) {
                success = true;
                alert('Congratulations! You decript the code');
                this.setState(prevState => ({
                    success,
                    rounds: newRounds,
                }));
            } else {
                this.setState(prevState => ({
                    success,
                    currentRound: prevState.currentRound + 1,
                    rounds: newRounds,
                }));
            }
        }
    }

    validatePlayerCode = () => {
        if (this.state.currentRound > 12) {
            alert('Game is over, try again!');
            return false
        }
        else {
            if (this.state.rounds[this.state.currentRound - 1].playerCode.includes(null)) {
                alert('Fill all 5 fields');
                return false;
            }
        }
        return true;
    }

    render() {
        return (
            <>
                <header>
                    {this.state.success ? <div className="secretCodeShow">
                        {this.state.secretCode.map((item, index) => <span key={index} data-index={index} className={item}></span>)}
                    </div> : <p>Secret Code</p>}
                    <button className="newGame firstOpen" onClick={this.handleNewGame}>New Game</button>
                </header>
                <main>
                    <ul>
                        {this.state.rounds.map(round => <Round key={round.id} round={round} currentRound={this.state.currentRound} pickColorToCode={this.handleChangeOneColorInPlayerCode} />)}
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
                    <button disabled={this.state.disabled} className="checkRound" onClick={this.handleCheckCode}>Check code</button>
                </footer>
            </>
        )
    }
}

export default Game;