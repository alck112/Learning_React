import React from "react";
import Slidebar from "./slidebar";
import {Route} from "react-router-dom";
import Posts from "./posts"
import Users from "./users";

const Dashboard = ({match}) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Slidebar/>
            <Route path={"/admin/posts"} component={Posts}/>
            <Route path={"/admin/users"} component={Users}/>
        </div>
    );
};

export default Dashboard;
