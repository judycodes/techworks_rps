import React, { Component } from 'react';
import PlayerCard from "./PlayerCard";

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"]; //array of static values
    
    this.state = {
      playerOne:"rock", //initializing values to string, initial value
      playerTwo:"scissors", //initial value

    }
    
  }
  
playGame = () => {
  this.setState({
    playerOne: this.signs[Math.floor(Math.random() * 3)],
    playerTwo: this.signs[Math.floor(Math.random() * 3)],
  })
}

//if playerOne sign === playerTwo sign, the game is at a draw
//if playerOne is rock && playerTwo is scissors, playerOne wins
//if playerOne is scissors && playerTwo is paper, playerOne wins
//if playerOne is paper && playerTwo is rock, playerOne wins
//if playerOne is rock && playerTwo is paper, playerTwo wins
//if playerOne is scissors && playerTwo is rock, playerTwo wins
//if playerOne is paper && playerTwo is scissors, playerTwo wins

decideWinner = () => {
  const playerOne = this.state.playerOne;
  const playerTwo = this.state.playerTwo;

  if (playerOne === playerTwo) {return 'The game is at a draw'};
  
  if((playerOne === 'rock' && playerTwo === 'scissors') || 
      (playerOne === 'scissors' && this.state.playerTwo === 'paper') || 
      (playerOne === 'paper' && this.state.playerTwo === 'rock')) {return "Player One Wins!";}

  else {return "Player Two Wins!";}
  
}


  render() {
    return ( //PlayerCard is a functional component
      //sign property being passed into PlayerCard component and {this.state.playerOne/Two} is providing initial values
      <div className = "style">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>

        <div>  
        <div className = "winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
        </div>
      </div>
    )
  }
}

//this.decideWinner() invoking/firing the method 
//when clicked, this.playGame sets state, rerenders, and fires the this.decideWinner() method
export default Game;
