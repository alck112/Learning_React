import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <Link to={"/"} className={"navbar-brand"}>Vidly</Link>


            <div>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item"}>
                        <NavLink to={"/test"} className={"nav-link"}>test</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;