import React, { Component } from 'react';
import Movie from './routes/Movie';
import Header from './components/Header';
import './css/App.css';

const titles = [
    'The Intouchables (2011)',
    'The Dark Knight (2008)',
    '12 Angry Men (1957)',
    'Pianist (2002)'
]


const posters = [
    'https://fbwebsitedefaultstorage.blob.core.windows.net/film/14366/uk/untouchable-poster.jpg', //untouchable
    'https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg', //darkknight
    'http://cine-real.com/wp-content/uploads/2012/11/Poster-12-Angry-Men_04.jpg', //12angrymen
    'https://i.pinimg.com/originals/1f/cf/b3/1fcfb3d081c028bcfb4066f589596c10.jpg' //pianist
]

const plots = [
    'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.',
    'When the Joker emerges from his mysterious past, he wreaks chaos on Gotham. The Dark Knight must accept the greatest psychological and physical tests to fight injustice.',
    'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
    'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
    ''
]

const casts = [
    'François Cluzet, Omar Sy, Anne Le Ny',
    'Christian Bale, Heath Ledger, Aaron Eckhart',
    'Henry Fonda, Lee J. Cobb, Martin Balsam',
    'Adrien Brody, Thomas Kretschmann, Frank Finlay',
    ''
]

const genres = [
    'Biography, Comedy, Drama',
    'Action, Crime, Drama, Thriller',
    'Crime, Drama',
    'Biography, Drama, Music, War',
    ''
]

class App extends Component {

    render(){
        return(
            <div className="whole">
                <div className="container">
                    <Header />
                    <Movie title={titles[0]} poster={posters[0]} cast={casts[0]} plot={plots[0]} genre={genres[0]} />
                    <Movie title={titles[1]} poster={posters[1]} cast={casts[1]} plot={plots[1]} genre={genres[1]} />
                    <Movie title={titles[2]} poster={posters[2]} cast={casts[2]} plot={plots[2]} genre={genres[2]} />
                    <Movie title={titles[3]} poster={posters[3]} cast={casts[3]} plot={plots[3]} genre={genres[3]} />
                </div>
            </div>
        );
    }
}

export default App;
