import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from "react-router-dom";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect} from "react-router-dom";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
