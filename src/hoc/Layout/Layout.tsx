import React , {Component} from "react";
import classes from "./Layout.module.css"
import Aux from "../Auxiliary/Auxiliary";
import Sidebar from "../../Components/UI/SideBar/Sidebar";
export interface ILayoutProps {
    children: React.ReactNode
}

export interface ILayoutState {
    
}

class Layout extends Component<ILayoutProps, ILayoutState> {
    constructor(props: ILayoutProps){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <Aux>
                <Sidebar />
                <main className={classes.content}>{this.props.children}</main>
            </Aux>
        )
    }
}
export default Layout