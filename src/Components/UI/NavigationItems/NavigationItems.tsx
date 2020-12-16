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
                            exact to="/"
                            activeStyle={activeLinkStyle}
                            style={normalLinkStyle}>
                            home
                        </NavLink>
                    </li>
                    <li className={classes.NavigationItem}>
                        <NavLink
                            to="/newMilestone"
                            activeStyle={activeLinkStyle}
                            style={normalLinkStyle}
                        >
                            New Milestone
                        </NavLink>

                    </li>

                </ul>

            </div>
        )
    }
}

export default NavigationItems