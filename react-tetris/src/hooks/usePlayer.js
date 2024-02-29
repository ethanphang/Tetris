import { useCallback, useState } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH } from "../gameHelpers";

/**
 * Custom React hook for managing the player state in the Tetris game.
 * @returns {[Object, Function, Function]} A tuple containing the current player state object, a function to update the player position, and a function to reset the player state.
 */
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });
    //Updates the position of the player on the game grid.
    const updatePlayerPos = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    //Resets the player state to its initial position and a new random tetromino shape.
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])
    return [player, updatePlayerPos, resetPlayer];
    
}
