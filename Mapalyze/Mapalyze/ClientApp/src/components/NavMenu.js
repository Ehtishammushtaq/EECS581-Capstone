import React, {Component} from 'react';
import { Collapse, Navbar, Nav,  NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.css';
import ColorLogo from '../components/Logos/colorlogo.png';
import homelogo from '../components/Logos/NAV/home.png';
import aboutlogo from '../components/Logos/NAV/aboutus.png';
import loginlogo from '../components/Logos/NAV/login.png';
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

      <Nav className="bg-blue-600 p-0">

      
        <div className="container mx-auto flex items-center justify-between" >
          <Navbar expand="sm" light>
              <div className={classes.mapalyze}>
              
                <NavbarBrand  tag={Link} to="/"  onClick={() => this.handleClick('*')}>
                  <img style={{ width: 'auto', height: "2.5rem" }} src={ColorLogo} alt="Colorlogo"/>
                </NavbarBrand>
              </div>

              <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse isOpen={!collapsed} navbar>

                <div className={classes.links}>
                  
                  <Nav navbar>
                    <NavItem className={classes.home}>
                      <NavLink tag={Link} to="/" className={`${classes.link} ${activeLink === '/' && classes.activeLink}`} onClick={() => this.handleClick('/')}>
                        <img  style={{ width: 'auto', height: "2rem"}} src={homelogo}  alt="homelogo"/>
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className={classes.about}>
                      <NavLink tag={Link} to="/AboutUs" className={`${classes.link} ${activeLink === '/AboutUs' && classes.activeLink}`} onClick={() => this.handleClick('/AboutUs')}>
                        <img style={{ width: 'auto', height: "3rem" }} src={aboutlogo} alt="homelogo"/>
                      </NavLink>
                    </NavItem>
                    
                    <NavItem className={classes.login}>
                      <NavLink tag={Link} to="/Login" className={`${classes.link} ${activeLink === '/Login' && classes.activeLink}`} onClick={() => this.handleClick('/Login')}>
                        <img style={{ width: 'auto', height: "2rem" }} src={loginlogo} alt="homelogo"/>
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </div> 
            </Collapse>
          </Navbar>
        </div>
      </Nav>
      
    );
  }
}

export default NavMenu;


