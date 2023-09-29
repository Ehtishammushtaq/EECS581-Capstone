import React, { Component } from 'react';
import Conversioneg from './HomePageComponents/conversioneg';
import Videocomponent from './HomePageComponents/videocomponent';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
     <Conversioneg/>
    );
  }
}

export default Home;