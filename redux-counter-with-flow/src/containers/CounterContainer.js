// @flow

import Counter from '../components/Counter';
import * as actions from '../actions';
import { randomColor } from '../utils';
import { connect } from 'react-redux';

import type { Actions } from '../actions'

type Dispatch = (action: Actions) => any;

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = randomColor();
        dispatch(actions.setColor(color));
    }
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;