import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

/**
 * Represents the start button component in the Tetris game.
 * The start button is used to start or restart the game.
 */
const StartButton = ({ callback }) => (
    <StyledStartButton onClick = {callback}>Start Game</StyledStartButton>
)

export default StartButton;