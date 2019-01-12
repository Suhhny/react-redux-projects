import React, { Component } from 'react';
import MovieList from '../containers/movie_list';
import MovieDetail from '../containers/movie_detail';


export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}
