export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Creates a new game stage.
 * @returns {Array<Array<[number, string]>>} An array representing the game stage.
 */
export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )