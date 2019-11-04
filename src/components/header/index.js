import React from 'react';
import './header.css';

import logo from '../../assets/logo.png';
import TabButton from '../tab-button/index';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Home'
        };

        this.updateTabOnClick = this.updateTabOnClick.bind(this);
    }

    updateTabOnClick(tab) {
        this.setState({activeTab: tab});
        this.props.updateTab(tab);
    }

    render() {
        return (
            <div class="header">
                <div class="logo-sec">
                    <img src={logo} className="header-logo" alt="logo"/>
                </div>

                <div class="tab-list">
                    <TabButton activeTab={this.state.activeTab} label="Home" onClick={this.updateTabOnClick} />
                    <TabButton activeTab={this.state.activeTab} label="About" onClick={this.updateTabOnClick} />
                    <TabButton activeTab={this.state.activeTab} label="Portfolio" onClick={this.updateTabOnClick} />
                </div>
        
                <div class="react-sec">
                    <p>Powered by React</p>
                </div>
            </div>
        );
    }
}


export default Header;