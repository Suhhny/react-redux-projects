// @flow

import * as types from '../actions/ActionTypes';
import type { Actions } from '../actions';

type State = {
    number: number
}

const initialState = {
    number: 0
}

const setNumber = (state: State = initialState, action: Actions): State => {
    switch(action.type){
        case types.INCREMENT:
            return {
                number : state.number + 1
            }

        case types.DECREMENT:
            return {
                number : state.number - 1
            }

        default:
            return state;
    }
}

export default setNumber;
