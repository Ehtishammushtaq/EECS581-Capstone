import React, { Component } from 'react';
import classes from './Logos/Aboutus.module.css';
export class AboutUs extends Component {
  static displayName = AboutUs.name;

  render() {
    return (
      <div className={classes.about}>
        <h1>About US</h1>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
        <p>This is a simple example of a React component.</p>
  
      </div>
    );
  }
}

export default AboutUs;