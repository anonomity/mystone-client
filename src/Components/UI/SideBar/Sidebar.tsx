import React, { Component } from "react";
import classes from "./Sidebar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

class Sidebar extends Component {
    render() {
        return (

            <div className={classes.Sidedrawer}>
                <NavigationItems />           
            </div>



        )
    }
}
export default Sidebar