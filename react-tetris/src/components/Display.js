import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

/**
 * Represents the display component in the Tetris game.
 * The display is used to show game information such as score or game over message.
 */
const Display = ({ gameOver, text }) => (
    <StyledDisplay gameOver= {gameOver}>{text}</StyledDisplay>
)

export default Display;