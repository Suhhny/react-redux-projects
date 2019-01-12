import React, { Component } from 'react';

class Movie extends Component{
    render(){
        return(
            <div className="body">
                <div className="box">
                    <div className="poster">
                        <img src={this.props.poster}></img>
                    </div>
                    <div className="info">
                        <h4>Title</h4>
                        > {this.props.title}

                        <h4>Plot</h4>
                        > {this.props.plot}

                        <h4>Cast</h4>
                        > {this.props.cast}
                        
                        <h4>Genre</h4>
                        > {this.props.genre}

                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;