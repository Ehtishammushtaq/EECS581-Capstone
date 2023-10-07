import React, { useState ,Component} from 'react';
import { Collapse, Navbar, Nav,  NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.css';


export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      activeLink: ''
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleClick(link) {
    this.setState({
      activeLink: link
    });
  }

  render() {
    const { collapsed, activeLink } = this.state;

    return (
      <div className={classes.navmenu}>
        <Navbar expand="sm" light>
          <div className={classes.mapalyze}>
            <NavbarBrand  tag={Link} to="/"  onClick={() => this.handleClick('*')}>Mapalyze</NavbarBrand>
          </div>

          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse isOpen={!collapsed} navbar>
           <div className={classes.links}>
            <Nav navbar>
              <NavItem className={classes.home}>
              <NavLink tag={Link} to="/" className={`${classes.link} ${activeLink === '/' && classes.activeLink}`} onClick={() => this.handleClick('/')}>Home</NavLink>
              </NavItem>
              <NavItem className={classes.about}>
              <NavLink tag={Link} to="/AboutUs" className={`${classes.link} ${activeLink === '/AboutUs' && classes.activeLink}`} onClick={() => this.handleClick('/AboutUs')}>About Us</NavLink>
              </NavItem>
              <NavItem className={classes.login}>
              <NavLink tag={Link} to="/Login" className={`${classes.link} ${activeLink === '/Login' && classes.activeLink}`} onClick={() => this.handleClick('/Login')}>Login</NavLink>
              </NavItem>
            </Nav>
            </div> 
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}

export default NavMenu;