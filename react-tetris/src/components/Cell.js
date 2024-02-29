import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

/**
 * Represents a single cell in the Tetris grid.
 * Each cell can contain a block of a specific type.
 */
const Cell = ({ type }) => (
    <StyledCell type ={type} color={TETROMINOS[type].color} />
);



export default Cell;