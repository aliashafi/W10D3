import React from 'react';
import Board from '../components/board';

import * as Minesweeper from '../minesweeper.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 12)
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      if (tile.flagged) tile.toggleFlag();
      tile.explore();
    }
    let pos = tile.pos;
    this.state.board.grid[pos[0]][pos[1]] = tile;
    this.setState({board: this.state.board});
  }

  render() {
    return (
      <div className="master">
        <h2 class="title">mine sweep #47</h2>

        <div>
          <Board board={this.state.board} updateGame={this.updateGame} />
        </div>

        
          {this.state.board.lost() ? <div className="popups"> 
            <p className="win-lose-message">ya lost bish</p> 
        </div>: 
          this.state.board.won() ? <div className="popups">
            <p className="win-lose-message">winner winner chicken dinner</p>
          </div> : ""}
      </div>
    )
  }

}

export default Game;