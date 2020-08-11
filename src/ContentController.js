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
    showOnTabBar: true
  },
  {
    name: "Portfolio",
    to: '/portfolio',
    exact: false,
    component: Portfolio,
    showOnTabBar: true
  },
  {
    name: "Socials",
    to: '/socials',
    exact: false,
    component: Socials,
    showOnTabBar: true
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
          <Header routes={ROUTES} />
          <Switch>
            {ROUTES.map(({exact, to, component}, i) => (
              <Route exact={exact} path={to} component={component} />
            ))}
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContentController;