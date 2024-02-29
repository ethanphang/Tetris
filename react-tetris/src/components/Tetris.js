import React, {useState} from 'react';

import { createStage } from '../gameHelpers';
//Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';



/**
 * Represents the Tetris game component.
 * @returns {JSX.Element} The Tetris game component.
 */
const Tetris = () => {
    // State for managing drop time and game over status
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Custom hooks for managing player and stage state
    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    // Function to move the player left or right
    const movePlayer = dir => {
        updatePlayerPos({ x: dir, y: 0 });
    };

    // Function to start the game
    const startGame = () => {
        // Reset the stage and player
        setStage(createStage());
        resetPlayer();
    };

    // Function to drop the player tetromino down
    const drop = () => {
        updatePlayerPos({ x: 0, y: 1, collided: false });
    };

    // Function to handle dropping the player tetromino
    const dropPlayer = () => {
        drop();
    };

    // Function to handle player movement based on key inputs
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                // Left arrow key pressed
                movePlayer(-1);
            } else if (keyCode === 39) {
                // Right arrow key pressed
                movePlayer(1);
            } else if (keyCode === 40) {
                // Down arrow key pressed
                dropPlayer();
            }
        }
    };

    // Render the Tetris game
    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                {/* Render the game stage */}
                <Stage stage={stage} />
                <aside>
                    {/* Render game over message or game stats */}
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>
                    )}
                    {/* Render the start button */}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
