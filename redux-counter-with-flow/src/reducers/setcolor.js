// @flow

import * as types from '../actions/ActionTypes';
import type { Actions } from '../actions' 

type State = {
    color: string
}

const initialState = {
    color: "black"
}

const setColor = (state: State = initialState, action: Actions): State => {   //return type State
    switch(action.type){
        case types.SET_COLOR:
            return {
                color: action.color
            }

        default:
            return state;
    }
}

export default setColor;
