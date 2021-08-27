import './App.css';
import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    // constructor (props) {
    //     super(props);
    //     console.log("App - Constructor");
    //     this.state = this.props.something;
    // }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters: counters});
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters});
    };


    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters onReset={this.handleReset}
                              onIncrement={this.handleIncrement}
                              onDecrement={this.handleDecrement}
                              onDelete={this.handleDelete}
                              counters={this.state.counters}
                    />
                </main>
            </React.Fragment>
        );
    }
};


export default App;
