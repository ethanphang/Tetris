import React from 'react';

import { createStage } from '../gameHelpers';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton'

/**
 * Represents the Tetris game component.
 * @returns {JSX.Element} The Tetris game component.
 */
const Tetris = () => {
    return (
        <div>
            <Stage stage = {createStage()} />
            <aside>
                <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;