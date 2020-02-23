import React from 'react';
import './contentcontroller.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Page from './components/page/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Home from './pages/home/index';
import About from './pages/about/index';
import Portfolio from './pages/portfolio/index';
import Socials from './pages/socials/index';
import Error from './pages/error/index';

const ROUTES = {
    Home: {
        to: '/',
        exact: true,
        component: Home
    },
    About: {
        to: '/about',
        exact: false,
        component: About
    },
    Portfolio: {
        to: '/portfolio',
        exact: false,
        component: Portfolio
    },
    Socials: {
        to: '/socials',
        exact: false,
        component: Socials
    }
}

class ContentController extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header routes={ROUTES} />
                    <Switch>
                        {Object.keys(ROUTES).map((key, i) => (
                            <Route exact={ROUTES[key].exact} path={ROUTES[key].to} render={(props) => (<Page {...props} component={ROUTES[key].component} title={key} />)}/>
                        ))}
                        <Route render={(props) => (<Page {...props} component={Error} />)} />
                    </Switch>
                </Router>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ContentController;