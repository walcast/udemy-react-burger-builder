import React, { Fragment, Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    componentWillUpdate() {
        console.log('[Modal.js] WillUpdate ');
    }

    shouldComponentUpdate(nextProp, nextState) {
        return nextProp.show !== this.props.show;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.close}/>
                <div className={classes.Modal} 
                    style={{
                        transform:this.props.show? 'translateY(0)':'translateY(-100vh)',
                        opacity:this.props.show? '1':'0',
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        );

    }
} 

export default Modal;