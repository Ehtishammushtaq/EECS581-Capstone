import React, { Component } from 'react';
import classes from './videocomponent.module.css';
import Example from '../HomePageComponents/component';
export class Videocomponent extends Component {
  static displayName = Videocomponent.name;

  render() {
    return (
        <div className={classes.video}>
          
        <h1>Mapalyze video example</h1>
        
        
        <iframe width="600" height="400" src="https://www.youtube.com/embed/-0n2kxkdJgM" title="Where Your Cat Goes May Blow Your Mind | National Geographic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Example/>
          <Example/>
          <Example/>
        </div>
        
        </div>
    );
  }
}

export default Videocomponent;

