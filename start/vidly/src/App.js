import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect} from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "../../start/vidly/src/components/common/navbar";



class App extends Component {

  render() {
    return (
        <React.Fragment>
          <NavBar></NavBar>
          <main className="container mt-4">
            <div>
              <Movies />
            </div>
          </main>

        </React.Fragment>
    );
  }
}

export default App;