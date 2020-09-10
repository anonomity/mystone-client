import React, { Component } from "react";

import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";
const activeLinkStyle: Object = {
    color: "white",
    backgroundColor: "#9c8383",
    display: "flex",
    width: "100%",
    flexFlow: "column",
    alignItems: "center",
    padding: "16px 10px",
    textTransform: "uppercase"

}

const normalLinkStyle: Object = {
    margin: '2px 0',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    textDecoration: "none",
    flexFlow: 'column',
    backgroundColor: ' #eeeaea',
    padding: '16px 10px',
    color: "#707070",
    textTransform: "uppercase"
}
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