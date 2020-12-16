import React, { Component } from "react";

import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

class NavigationItems extends Component {
    render() {
        return (
            <div>
                <ul className={classes.NavigationItems}>
                    <li className={classes.NavigationItem}>
                        <NavLink 
                            to="/newMilestone"
                            >
                            New Milestone
                </NavLink>
                    </li>
                    <li className={classes.NavigationItem}>
                        <NavLink to="/">
                            home
                </NavLink>
                    </li>

                </ul>

            </div>
        )
    }
}

export default NavigationItems