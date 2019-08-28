import React from 'react';
import ReactDOM from 'react-dom';
import Tile from '../components/tile';
import Board from '../components/board';
import Game from '../components/game';
import * as minesweeper from '../minesweeper.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(
    <Game />, root
  );
});