import React, { Component } from 'react';
import Conversioneg from './HomePageComponents/conversioneg';
import Videocomponent from './HomePageComponents/videocomponent';

import classes from './Home.module.css';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className={classes.home}>
        <Conversioneg/>
        <Videocomponent/> 
      </div>
     
    );
  }
}

export default Home;