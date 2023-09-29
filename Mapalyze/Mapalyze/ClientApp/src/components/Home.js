import React, { Component } from 'react';
import Conversioneg from './HomePageComponents/conversioneg';
import Videocomponent from './HomePageComponents/videocomponent';
import Example from './HomePageComponents/component';
import classes from './Home.module.css';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (

      <div className={classes.home}>
          <Conversioneg/>
          <Videocomponent/>
          <Example/>
          <Example/>
          <Example/>
      </div>
     
    );
  }
}

export default Home;