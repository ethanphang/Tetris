import styled from 'styled-components';

/**
 * Represents the styled display component in the Tetris game.
 * The display is used to show game information such as score or game over message.
 */
export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min_height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    `;
    