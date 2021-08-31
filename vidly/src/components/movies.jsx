import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import LikeButton from "./common/likeButton";
import Pagination from "./common/pagination";
import {pagination} from "../utils/paginate";

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    };

    handleLikedMovie = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].isLiked = !movies[index].isLiked
        this.setState({movies: movies});
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };


    render() {
        const {pageSize, currentPage, movies: allMovies} = this.state;
        const {length: count} = this.state.movies;
        if (count === 0) return <p>There are no movies in the database.</p>;

        const movies = pagination(allMovies, currentPage, pageSize);

        return (
            <React.Fragment>
                <p> Showing {count} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><LikeButton onLikeClick={() => this.handleLikedMovie(movie)} movie={movie}/></td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"
                                        type="button">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
            </React.Fragment>
        );
    };
};

export default Movies;
