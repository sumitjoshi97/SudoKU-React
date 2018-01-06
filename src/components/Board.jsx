import React from 'react';
import Box from './Box';

const Board = (props) => {
    return (
        <div id="Board">
            <div className="Row">
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="Row">
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div className="Row">
                <Box/>
                <Box/>
                <div className="Box Cross"></div>
            </div>

        </div>
    )
};

export default Board;
