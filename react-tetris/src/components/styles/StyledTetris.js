import styled from 'styled-components';
import bgImage from '../../img/bg.png'

/**
 * Represents the styled wrapper for the Tetris game.
 * The wrapper contains the entire Tetris game layout.
 */
export const StyledTetrisWrapper = styled.div`
    width: 100vw:
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`
/**
 * Represents the styled container for the Tetris game.
 * The container holds the Tetris game layout and elements.
 */
export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside{
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`