import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }

    drawerToggleHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer:!prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Fragment>
                <Toolbar toggle={this.drawerToggleHandler} />
                <SideDrawer 
                    show={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }

}

export default Layout;