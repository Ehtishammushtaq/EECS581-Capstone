import React, { Component } from 'react';
import classes from './videocomponent.module.css';
export class Videocomponent extends Component {
  static displayName = Videocomponent.name;

  render() {
    return (
        <div className={classes.video}>
        <h1>Mapalyze video example</h1>
        
        <iframe width="700" height="500" src="https://www.youtube.com/embed/-0n2kxkdJgM" title="Where Your Cat Goes May Blow Your Mind | National Geographic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Videocomponent;

