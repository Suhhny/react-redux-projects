import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component{
    render(){
        if(!this.props.movie){
            return <div>Select a book to get Started.</div>;
        }

        return(
            <div>
                <h3>Detail for:</h3>
                <div>{this.props.movie.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        movie: state.activeMovie
    };
}


export default connect(mapStateToProps)(MovieDetail);