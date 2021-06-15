import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Footer, Header } from './components';
import { About, Error, Home, Portfolio, Socials, Contact } from './pages';

export const ROUTES = [
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
    name: "Contact",
    to: "/contact",
    exact: false,
    component: Contact,
    showOnTabBar: true
  },
  {
    name: "Error",
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
          <Switch>
            {ROUTES.map(({exact, to, component}, i) => (
              <Route exact={exact} path={to} component={component} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default ContentController;