import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import {pagination} from "../utils/paginate";
import ListGroup from "./common/listGroup";
import  {getGenres} from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import * as path from "path";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: "",
        sortColumn: {path: 'title', order: 'asc'}
    };

    componentDidMount() {
        const genres = [{_id: "", name: 'All Genres'},...getGenres()]
        this.setState({movies: getMovies(), genres:genres})
    }

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

    handleGenreSelect = (genre) => {
        this.setState({selectedGenre: genre, currentPage: 1});
    };

    handleSort = (sortColumn) => {
        this.setState({sortColumn: sortColumn});
    };

    getPageData = () => {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            selectedGenre,
            sortColumn
        } = this.state;

        const filtered = selectedGenre && selectedGenre._id ?
            allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = pagination(sorted, currentPage, pageSize);

        return {totoalCount: filtered.length, data:movies};
}

    render() {
        const {
            pageSize,
            currentPage,
            genres,
            selectedGenre,
            sortColumn
        } = this.state;

        const {length: count} = this.state.movies;

        if (count === 0) return <p>There are no movies in the database.</p>;

        const {totoalCount, data: movies} = this.getPageData();

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup items={genres}
                               selectedItems={selectedGenre}
                               onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p> Showing {totoalCount} movies in the database.</p>
                    <MoviesTable movies={movies}
                                 onLikeClick={this.handleLikedMovie}
                                 onDelete={this.handleDelete}
                                 onSort={this.handleSort}
                                 sortColumn={sortColumn}
                    />
                    <Pagination itemCount={totoalCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange}
                    />

                </div>
            </div>
        );
    };
};

export default Movies;
