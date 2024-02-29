import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

/**
 * A custom hook that manages the game stage.
 * @param {object} player - The player object containing information about the current player.
 * @param {function} resetPlayer - A function to reset the player.
 * @returns {Array} An array containing the current stage and a function to set the stage.
 */
export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    useEffect(() => {
        const updateStage = prevStage => {
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );

            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });
            return newStage;
        };
        setStage(prev => updateStage(prev));
    }, [player]);

    return [stage, setStage];
}