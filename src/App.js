import React, { Component } from 'react'

class Game extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className = "style">
        <div className = "player-card">
          <img /> player card component
        </div>

        <div className = "player-card">
          <img /> player card component
        </div>

        <div>
          
          <div className = "winner"><h1>Player <span>{}</span> Wins</h1></div>
          <button type="button">Play the Game</button>
        </div>
      </div>
    )
  }
}

export default Game;
