import React, { Component } from 'react';
export class AboutUs extends Component {
  static displayName = AboutUs.name;

  render() {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'">
        <div className='flex flex-col items-center justify-center text-left text-white ml-36 mr-36 mt-28'>

        
          <h1>About US</h1>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
          <p>This is a simple example of a React component.</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;