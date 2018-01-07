import React from 'react';
import Box from './Box';

const Board = (props) => {
    this.renderBox = (i) => (<Box value={i} onClick={() => props.onClick(i)}/>)

    return (
        <div id="Board">
            <div className="Row">
                {this.renderBox(0)}
                {this.renderBox(1)}
                {this.renderBox(2)}
            </div>
            <div className="Row">
                {this.renderBox(3)}
                {this.renderBox(4)}
                {this.renderBox(5)}
            </div>
            <div className="Row">
                {this.renderBox(6)}
                {this.renderBox(7)}
                {this.renderBox(8)}
                {/* <div className="Box Cross"></div> */}
            </div>

        </div>
    )
};

export default Board;
