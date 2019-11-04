import React from 'react';
import './contentcontroller.css';
import logo from './logo.svg';

import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

class ContentController extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Home activeTab={this.props.activeTab} />
                <About activeTab={this.props.activeTab} />
                <Portfolio activeTab={this.props.activeTab} />
            </React.Fragment>
        );
    }
}

export default ContentController;