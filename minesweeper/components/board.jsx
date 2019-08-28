import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //this.props.board.grid
    const { board: {grid, numBombs} } = this.props;
    const {board} = this.props;
    return (
      <div>
        <ul className="grid">
          {
            grid.map((row, idx) => {
              return (<li key={idx} className="grid-row">
                {row.map((col, idx2) => {
                  return (<Tile key={idx2} updateGame={this.props.updateGame.bind(this)} tile={grid[idx][idx2]} />)
                })}
              </li>)
            })
          }
        </ul>
      </div>
    )
  }


}



export default Board;