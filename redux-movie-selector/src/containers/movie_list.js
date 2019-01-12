import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import { bindActionCreators } from 'redux';


class MovieList extends Component{

    renderList(){
        return this.props.movie.map((movie) => {
            return (
                <li key={movie.title} onClick={() => this.props.selectMovie(movie)} className="list-group-item">
                    {movie.title}
                </li>
            );
        });
    }

    render(){
        console.log(this.props.movie);

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show up as props
    // inside of MovieList
    return{
        movie: state.movie
    };
}

// Anything returned from this function will end up as props on the MovieList container.  this.props.selectMovie
function mapDispatchToProps(dispatch){
    // whenever selectMovie is called, the result should be passed to all of our reducers.
    return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

// Promote MovieList from a component to a container - it needs to know about this new dispatch method,
// selectovie. Make it availale as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);










// redux는 data, react는 view를 담당
// reducer: state를 관리하는 함수
// action: 이벤트 관리 -> reducer에게 흘러가야 한다.

// component 대신 container라고 부른다. 
// 리액트 컴포넌트로, 리덕스에 의해 관리되는 스테이트에 접근이 가능하다.
// react-redux

// directory 
//     containers  
//     components