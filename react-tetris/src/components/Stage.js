import React from 'react';
import Cell from './Cell'
import { StyledStage } from './styles/StyledStage';

/**
 * Represents the stage component in the Tetris game.
 * The stage contains a grid of cells representing the game board.
 */
const Stage = ({ stage }) => (
    <StyledStage width = {stage[0].length} height = {stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key = {x} type = {cell[0]} />))}
    </StyledStage>
)

export default Stage;