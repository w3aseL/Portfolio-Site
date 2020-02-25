import React from 'react';
import './header.css';

import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import reactLogo from '../../assets/react-logo.png'
import TabButton from '../tab-button/index';

import menuButton from '../../assets/threelines.png'

import throttle from 'lodash.throttle'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileIsTabListOpen: false
        }
    }

    render() {
        var routes = this.props.routes

        const isMobile = window.innerWidth <= 500

        var changeStateOnClick = () => {
            this.setState((state, props) => ({ mobileIsTabListOpen: !state.mobileIsTabListOpen }))
        }

        if(!isMobile) return (
            <div class="header">
                <div class="logo-sec">
                    <img src={logo} className="header-logo" alt="logo"/>
                </div>

                <div class="tab-list">
                    {Object.keys(routes).map((key, i) => (<TabButton label={key} to={routes[key].to} exact={routes[key].to} location={this.props.location} />))}
                </div>
        
                <div class="react-sec">
                    <p>Powered by React</p>
                </div>
            </div>
        );
        else return (
            <React.Fragment>
                <div class="header">
                    <div class="menu-button" onClick={changeStateOnClick}>
                        <img src={menuButton} alt="menu button"/>
                    </div>

                    <img src={logo} class="header-logo-mobile" alt="logo"/>

                    <a class="mobile-link" href="https://reactjs.org/">
                        <img src={reactLogo} class="react-logo" alt="react-logo"/>
                    </a>
                </div>
                <div class="links" style={{display:(this.state.mobileIsTabListOpen ? "block" : "none")}}>
                    {Object.keys(routes).map((key, i) => (<TabButton label={key} to={routes[key].to} exact={routes[key].to} location={this.props.location} />))}
                </div>
            </React.Fragment>
        )
    }
}


export default withRouter(Header);