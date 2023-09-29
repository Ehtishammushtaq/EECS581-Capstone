import React, { Component } from 'react';
import { Collapse, Navbar, Nav,  NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.css';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;

    return (
      <header className={classes.navmenu}>
        <Navbar expand="sm" light>
          <div className={classes.mainlogo}>
            <NavbarBrand tag={Link} to="/">Mapalyze</NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse isOpen={!collapsed} navbar>
           <div className='ml-auto '>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/AboutUs">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/App">Login</NavLink>
              </NavItem>
            </Nav>
            </div> 
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default NavMenu;