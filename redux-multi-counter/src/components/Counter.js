import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onSetColor, onIncrement, onDecrement}) => {
    return(
        <div className = "Counter"
            onClick = {() => onIncrement(index)}
            onContextMenu = {(e) => { e.preventDefault(); onDecrement(index); }}
            onDoubleClick = {() => onSetColor(index)}
            style = {{backgroundColor: color}}>
            {number}
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onDecrement: PropTypes.func,
    onIncrement: PropTypes.func,
    onSetColor: PropTypes.func
}

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: "black",
    onDecrement: () => {console.warn("onDecrement not defined")},
    onIncrement: () => {console.warn("onIncrement not defined")},
    onSetColor: () => {console.warn("onSetColor not defines")}
}

export default Counter;