import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: getMovies()
        }
    }

    render() {
        return (
            <div>
                <p>Showing number movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th className="col-5" scope="row">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="col-5" scope="row">Movie's Title</td>
                        <td>Movie's Genre</td>
                        <td>Movie's Stock</td>
                        <td>Movie's Rate</td>
                        <td><button className="btn btn-danger" type="button">Button</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movies;