import { FETCH_WEATHER } from '../actions/index';
import { bindActionCreators } from 'redux';

export default function(state = [], action){
    console.log('Action received', action);

    switch(action.type){
        case FETCH_WEATHER:
            // return state.concat([ action.payload.data ]);
            return [ action.payload.data, ...state ];      //state.push()는 huge error

        default:
            return state;
    }
}