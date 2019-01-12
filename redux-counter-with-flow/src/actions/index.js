// @flow

import * as types from './ActionTypes';
import { ExtractReturn } from 'redux';

export const increment = () => ({
    type: types.INCREMENT
})

export const decrement = () => ({
    type: types.DECREMENT
})

export const setColor = (color: string) => ({
    type: types.SET_COLOR,
    color
})

export type Actions =
    ExtractReturn<typeof increment> |
    ExtractReturn<typeof decrement> |
    ExtractReturn<typeof setColor>
