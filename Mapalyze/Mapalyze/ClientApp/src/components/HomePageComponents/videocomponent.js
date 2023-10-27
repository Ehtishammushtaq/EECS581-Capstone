import React, { Component } from 'react';
export class Videocomponent extends Component {
  static displayName = Videocomponent.name;

  render() {
    return (
      <div className='relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>
        <div className=' border-blue-500 rounded-lgtext-white p-4 rounded-lg  ml-28 mt-16 mr-60'>

        
          <div className='flex flex-col items-start justify-start text-left text-white  '>
            <h1 className='text-3xl mb-4'>Mapalyze video example</h1>
            <iframe 
              className='mb-4 w-50 h-96 flex '
              src="https://www.youtube.com/embed/-0n2kxkdJgM" 
              title="Where Your Cat Goes May Blow Your Mind | National Geographic" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            />
            <div className='text-lg mr-144 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Videocomponent;
