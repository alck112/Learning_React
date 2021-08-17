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
    state = {
        value: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: ["tag1","tag2","tag3"]
    };



    renderTags() {

        if (this.state.tags.length === 0) return <p>There is no tags!</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({value: this.state.value + 1});
    }


    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount () {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }


    render() {

        return (
            <div>
                {/*<img src={this.state.imageUrl} alt=""/>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/*<h2>It is.</h2>*/}
                <button onClick={(product) => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
}

export default Counter;
