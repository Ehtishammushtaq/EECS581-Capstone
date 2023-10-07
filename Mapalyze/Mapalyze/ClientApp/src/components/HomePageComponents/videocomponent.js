import React, { Component } from 'react';
import classes from './videocomponent.module.css';
export class Videocomponent extends Component {
  static displayName = Videocomponent.name;

  render() {
    return (
        <div className={classes.video}>
          <h1>Mapalyze video example</h1>
          <iframe className={classes.inner} src="https://www.youtube.com/embed/-0n2kxkdJgM" 
          title="Where Your Cat Goes May Blow Your Mind | National Geographic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </text>
        </div>
    );
  }
}

export default Videocomponent;

