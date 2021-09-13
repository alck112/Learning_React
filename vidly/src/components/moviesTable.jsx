import React, {Component} from 'react';
import LikeButton from "./common/likeButton";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {

    columns = [
        {label: 'Title', path: 'title'},
        {label: 'Genre', path: 'genre.name'},
        {label: 'Stock', path: 'numberInStock'},
        {label: 'Rate', path: 'dailyRentalRate'},
        {
            key: 'like', content: (
                movie => <LikeButton onLikeClick={() => this.props.onLikeClick(movie)}
                                     movie={movie}
                />)
        },
        {
            key: 'delete', content: movie => (
                <button onClick={() => this.props.onDelete(movie)}
                        className="btn btn-danger btn-sm"
                        type="button">
                    Delete
                </button>
            )
        }
    ];

    render() {
        const {movies, sortColumn, onSort} = this.props;

        return (
            <table className="table">
                <TableHeader columns={this.columns}
                             sortColumn={sortColumn}
                             onSort={onSort} />

                <TableBody columns={this.columns} data={movies}/>
            </table>
        );
    }
}


export default MoviesTable;