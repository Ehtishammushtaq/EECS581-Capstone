import React, { Component } from 'react';
import classes from './component.module.css'
export class Example extends Component {
  static displayName = Example.name;

  render() {
    return (
        <div className={classes.example}>
            <h1>This is another component</h1>
      </div>
    );
  }
}

export default Example;

