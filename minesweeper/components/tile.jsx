import React from 'react';
import { toUnicode } from 'punycode';

class Tile extends React.Component{
  constructor(props){
    super(props);
    
    this.updateGame = this.props.updateGame.bind(this);
  }

  clickHandler (event, value) {
    if (event.ctrlKey) {

    }
  }


  render() {
    // debugger
    const { tile } = this.props; 

    if (tile.explored) {
      return (
        <p className="tile-revealed">{tile.adjacentBombCount() ? tile.adjacentBombCount(): ""} </p>
      )
    } else if (tile.flagged) {
      return (
        <p className="tile-flagged" onClick={(e) => {
          if (e.altKey) {
            this.updateGame(tile, true)
          }
        }}></p>
      )
    } else {
      return (
        <p className="tile-unrevealed" onClick={(e) => {
          if (!e.altKey) {
            this.updateGame(tile, false);
          } else if (e.altKey) {
            this.updateGame(tile, true)
          }}
        }></p>
      )
    }

    
  }


}



export default Tile;