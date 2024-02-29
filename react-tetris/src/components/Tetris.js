import React, {useState} from 'react';

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
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const[stage, setStage] = useStage(player);


    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage = {stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text= "Gam Over" />
                        ) : (
                        <div>
                            <Display text="Score" />
                            <Display text="Rows" />
                            <Display text="Level" />
                        </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;