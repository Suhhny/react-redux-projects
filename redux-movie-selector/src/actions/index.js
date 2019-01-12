export function selectMovie(movie){
    // console.log('a movie has been selected', movie.title)
    return{
        type: 'MOVIE_SELECTED',
        payload: movie
    };
}



// ActionCreator needs to return an action, an object with a type property.