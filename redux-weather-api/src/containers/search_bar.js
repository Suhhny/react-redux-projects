import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term : '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            term: e.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //get weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return(
            <form className = "input-group" onSubmit = {this.onFormSubmit}>
                <input placeholder = "Get a five-day forecast in your favorite cities"
                        className = "form-control"
                        value = { this.state.term }
                        onChange = { this.onInputChange }/>
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-secondary">
                        SUBMIT!
                    </button>
                </span>
            </form>  //enter => auto form submit
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

//null : mapStateToProps 없지만 mapDispatchToProps는 두번째로 들어가야 함.
//state 필요 없다!