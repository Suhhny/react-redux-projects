import { combineReducers } from 'redux';

import setColor from './setcolor';
import setNumber from './setnumber';

const reducers = combineReducers({
    numberData: setNumber,
    colorData: setColor
})

export default reducers;