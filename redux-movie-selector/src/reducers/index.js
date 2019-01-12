import { combineReducers } from 'redux';
import MovieReducer from './reducer_movie';
import ActiveMovieReducer from './reducer_active_movie';

const rootReducer = combineReducers({  //state mapping
  movie: MovieReducer,
  activeMovie: ActiveMovieReducer
});

export default rootReducer;