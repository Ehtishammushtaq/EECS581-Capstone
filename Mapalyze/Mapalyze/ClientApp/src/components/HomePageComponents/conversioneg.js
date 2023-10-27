import React, { Component } from 'react';
import Example from '../HomePageComponents/component';
import Colorlogo from '../Logos/SVG/colorlogo.svg';
export class Conversioneg extends Component {
  static displayName = Conversioneg.name;

  render() {
    return (
      
      <div className=' flex flex-wrap relative w-full  ' >
        <Example/>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex items-start justify-start flex-col text-white max-w-screen-3xl'>
           
           
            
            <img src={Colorlogo} className="h-12 text-blue-900 ml-36 mt-36"  alt="Mapalyze Logo"/>
            
            <div className='text-gray-100 dark:text-gray-900 ml-36'>

            
              <strong>
                <p>Our app takes multiple floor plans and generates a 3D layout of a building, <br/> marking stairs hallways and rooms, with navigation features built on top</p>
              </strong>
            
            
              <p>Mapalyze is built using the following technologies:</p>
              <ul  >  
                <li>ASP.NET Core 5.0</li>
                <li>Entity Framework Core 5.0</li>
                <li>React 17.0.1</li>
                <li>React Router 5.2.0</li>
                <li>React Leaflet 3.0.5</li>
                <li>React Bootstrap 1.4.0</li>
                <li>React CSV Reader 3.0.0</li>
                <li>React Dropzone 11.2.1</li>
                <li>React Bootstrap 1.4.0</li>
                <li>React CSV Reader 3.0.0</li>
                <li>React Dropzone 11.2.1</li>
              
              </ul>
            </div>
         </div>
        </div>
      
    );
  }
}

export default Conversioneg;