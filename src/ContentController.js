import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Footer, Header } from './components';
import { About, Error, Home, Portfolio, Socials } from './pages';

const ROUTES = [
  {
    name: "Home",
    to: '/',
    exact: true,
    component: Home,
    showOnTabBar: false
  },
  {
    name: "Home-Reroute",
    to: '/home',
    exact: true,
    component: () => <Redirect to="/" />,
    showOnTabBar: false
  },
  {
    name: "About",
    to: '/about',
    exact: false,
    component: About,
    showOnTabBar: false
  },
  {
    name: "Portfolio",
    to: '/portfolio',
    exact: false,
    component: Portfolio,
    showOnTabBar: false
  },
  {
    name: "Socials",
    to: '/socials',
    exact: false,
    component: Socials,
    showOnTabBar: false
  },
  {
    name: "Socials",
    to: '**',
    exact: false,
    component: Error,
    showOnTabBar: false
  }
]

class ContentController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="background d-flex flex-column">
            <Header routes={ROUTES} style={{ flex: "0 1 auto" }} />
            <div style={{ flex: "1 1 auto" }}>
              <Switch>
                {ROUTES.map(({exact, to, component}, i) => (
                  <Route exact={exact} path={to} component={component} />
                ))}
              </Switch>
            </div>
            <Footer style={{ flex: "0 1 auto" }} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default ContentController;