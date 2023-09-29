import React, { Component } from 'react';
import classes from './videocomponent.module.css';
export class Videocomponent extends Component {
  static displayName = Videocomponent.name;

  render() {
    return (
        <div className={classes.video}>
        <h1>Mapalyze video example</h1>
      </div>
    );
  }
}

export default Videocomponent;