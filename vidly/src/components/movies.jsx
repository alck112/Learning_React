import React, {Component} from 'react';
import LikeButton from "./likeButton";

class Movies extends Component {


    render() {
        const {length: count} = this.props.movies;
        if (count === 0)
            return <p>There are no movies in the database.</p>;

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
                    {this.props.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <LikeButton onLikeClick={() => this.props.onLikeClick(movie)} movie={movie} /> </td>
                            <td>
                                <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm"
                                        type="button">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    };
};

export default Movies;
