import React from 'react';

const Box = (props) => (
    <div className="Box" value={props.value} onClick={props.onClick}>
        {props.value}
    </div>
);

export default Box;