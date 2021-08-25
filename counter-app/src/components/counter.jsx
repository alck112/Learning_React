import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     count: 0,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: ["tag1","tag2","tag3"]
    // };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: this.props.value,
    //         imageUrl: 'https://picsum.photos/200',
    //         tags: ["tag1","tag2","tag3"]
    //     };
    // }


    // renderTags = () => {
    //
    //     if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    //
    //     return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }


    getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    };

    formatCount = () => {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    };



    render() {

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)}
                            className="btn btn-secondary btn-sm">+
                    </button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)}
                            className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}>-
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm">Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
