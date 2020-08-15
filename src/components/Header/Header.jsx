import React from 'react';
import './Header.scss';

import { withRouter } from 'react-router-dom';

import { Container, Nav, Navbar, Collapse, NavbarToggler, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import logo from '../../assets/logo.png';
import reactLogo from '../../assets/react-logo.png'
import TabButton from '../TabButton';

import menuButton from '../../assets/threelines.png'

import throttle from 'lodash.throttle'

class NoRouterHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { routes } = this.props

    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/"><img src={logo} style={{ width: "6vh" }} alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {routes.map(({ name, to, exact, showOnTabBar }, i) => showOnTabBar && (
                <NavItem>
                  <NavLink href={to}>{name}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

const Header = withRouter(NoRouterHeader)

export { Header }

export default Header;