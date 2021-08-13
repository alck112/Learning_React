import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     count: 0,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: ["tag1","tag2","tag3"]
    // };

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            imageUrl: 'https://picsum.photos/200',
            tags: ["tag1","tag2","tag3"]
        };
    }

    renderTags() {

        if (this.state.tags.length === 0) return <p>There is no tags!</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    }


    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount () {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }


    render() {

        return (
            <div>
                {/*<img src={this.state.imageUrl} alt=""/>*/}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/*<h2>It is.</h2>*/}
                <button onClick={(product) => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
                <input onChange={(product) => this.handleIncrement(product.target.value)}/>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </div>
        );
    }
}

export default Counter;
