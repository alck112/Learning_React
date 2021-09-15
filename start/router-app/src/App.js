import React, { Component } from "react";
import NavBar from "./components/navbar";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/products" component={Products}/>
                        <Route path="/posts" component={Posts}/>
                        <Route path="/admin" component={Dashboard}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
