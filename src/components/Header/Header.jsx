import React from 'react';
import './Header.scss';

import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.png';
import reactLogo from '../../assets/react-logo.png'
import TabButton from '../TabButton';

import menuButton from '../../assets/threelines.png'

import throttle from 'lodash.throttle'

class NoRouterHeader extends React.Component {
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

    if (!isMobile) return (
      <div class="header">
        <div class="logo-sec">
          <a href="/"><img src={logo} className="header-logo" alt="logo" /></a>
        </div>

        <div class="tab-list">
        {routes.map(({ name, to, exact, showOnTabBar }, i) => showOnTabBar && (
            <TabButton label={name} to={to} exact={exact} location={this.props.location} />
          ))}
        </div>

        <a class="react-sec" href="https://reactjs.org/">
          <p>Powered by React</p>
        </a>
      </div>
    );
    else return (
      <React.Fragment>
        <div class="header">
          <div class="menu-button" onClick={changeStateOnClick}>
            <img src={menuButton} alt="menu button" />
          </div>

          <img src={logo} class="header-logo-mobile" alt="logo" />

          <a class="mobile-link" href="https://reactjs.org/">
            <img src={reactLogo} class="react-logo" alt="react-logo" />
          </a>
        </div>
        <div class="links" style={{ display: (this.state.mobileIsTabListOpen ? "block" : "none") }}>
          {routes.map(({ name, to, exact, showOnTabBar }, i) => showOnTabBar && (
            <TabButton label={name} to={to} exact={exact} location={this.props.location} />
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const Header = withRouter(NoRouterHeader)

export { Header }

export default Header;