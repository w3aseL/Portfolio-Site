import React from 'react';
import './Header.scss';

import { isBrowser } from "react-device-detect"
import { withRouter } from 'react-router-dom';

import { Container, Nav, Navbar, Collapse, NavbarToggler, NavbarBrand, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          {isBrowser && <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="p" className="nav-link mb-0 text-secondary" caret>
              External Links
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem disabled>Coming Soon!</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>}
        </Container>
      </Navbar>
    )
  }
}

const Header = withRouter(NoRouterHeader)

export { Header }

export default Header;