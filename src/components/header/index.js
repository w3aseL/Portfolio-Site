import React from 'react';
import './header.css';

import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import TabButton from '../tab-button/index';

class Header extends React.Component {
    render() {
        var routes = this.props.routes

        return (
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
    }
}


export default withRouter(Header);