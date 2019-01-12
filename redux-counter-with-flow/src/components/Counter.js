// @flow

import * as React from 'react';

import './Counter.css';

type Props = {
    color: string,
    number: number,
    onIncrement: void,
    onDecrement: Function,
    onSetColor: void
}


class Counter extends React.Component<Props>{
    
    static defaultProps = {
        color: 'black',
        number: 0,
        onIncrement: () => console.warn("onIncrement not defined"),
        onDecrement: () => console.warn("onDecrement not defined"),
        onSetColor: () => console.warn("onSetColor not defined")
    }

    render(){
        return(
            <div className="Counter" 
                onClick={this.props.onIncrement} 
                onContextMenu={(e: SyntheticEvent<HTMLAreaElement>) => { e.preventDefault(); this.props.onDecrement(); }}
                onDoubleClick={this.props.onSetColor}
                style={{backgroundColor: this.props.color}}>
                    {this.props.number}
            </div>
        );
    }
};

export default Counter;