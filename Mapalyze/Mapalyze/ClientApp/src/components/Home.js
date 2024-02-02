import React, { Component } from 'react';
import Conversioneg from './HomePageComponents/conversioneg';
import Videocomponent from './HomePageComponents/videocomponent';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className='flex flex-wrap items-center justify-center bg-gray-200 dark:bg-gray-900 w-full mt-24 z-10'>
        <Conversioneg />
        <Videocomponent />
      </div>

    );
  }
}

export default Home;