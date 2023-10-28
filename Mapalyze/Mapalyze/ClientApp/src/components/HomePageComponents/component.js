import React, { Component } from 'react';
import zhhh from '../Logos/render.mp4'
export class Example extends Component {
  static displayName = Example.name;

  render() {
    return (
        <div>
            <video autoPlay muted playsInline loop = "loop">
                <source src={zhhh} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
  }
}

export default Example;

