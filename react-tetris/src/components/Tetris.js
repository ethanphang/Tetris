import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


/**
 * Represents the Tetris game component.
 * @returns {JSX.Element} The Tetris game component.
 */
const Tetris = () => {
    // State for managing drop time and game over status
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Custom hooks for managing player and stage state
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

    // Function to move the player left or right
    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    }

    // Function to start the game
    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0)
        setGameOver(false);
    }

    // Function to drop the player tetromino down
    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            // Game Over
            if (player.pos.y < 1) {
                console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }

    // Function to handle dropping the player tetromino
    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const dropPlayerToBottom = () => {
        let didCollide = false;
        while (!didCollide) {
          // Check if moving down would cause a collision, including hitting the bottom of the grid
          if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            // Move the piece down by incrementing its Y position
            player.pos.y += 1;
          } else {
            didCollide = true; // Collision detected, break the loop
          }
        }
        updatePlayerPos({ x: 0, y: 0, collided: true }); // Final update with collision to lock the piece in place
      };
      
      
    
      


    // Function to handle player movement based on key inputs
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            } else if (keyCode === 32) { // Space bar
                dropPlayerToBottom();
            } else if (keyCode === 82) { // Space bar
                startGame(); 
            }

        }
    }

    useInterval(() => {
        drop();
    }, dropTime)
    // Render the Tetris game
    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
