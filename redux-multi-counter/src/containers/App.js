import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';
import { connect } from 'react-redux';
import { randomColor } from '../utils';
import * as actions from '../actions';

class App extends Component {
    render(){
        
        const {onCreate, onRemove} = this.props;
        return(
            <div className = "App">
                <Buttons onCreate={onCreate} onRemove={onRemove} />
                <CounterListContainer />
            </div>
            
        );
    }
}

const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(randomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

export default connect(null, mapToDispatch)(App);