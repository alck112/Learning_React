import './App.css';
import React, {Component} from 'react';
import Movies from "./components/movies";
import {getMovies} from "./services/fakeMovieService";



class App extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    };

    handleLikedMovie = movie => {
        const  movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].isLiked = !movies[index].isLiked
        this.setState({movies: movies});
    }


    render() {
        return (
            <main className="container">
                <Movies onDelete={this.handleDelete} onLikeClick={this.handleLikedMovie} movies={this.state.movies} />
            </main>
        );
    }
}

export default App;
