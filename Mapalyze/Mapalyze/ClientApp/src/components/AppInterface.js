import React, { Component } from "react";
import axios from 'axios'; // Import axios for HTTP requests
import Dummyrender from "../Assets/Dummyrender.jpg"; // Import an image for rendering

// Define a class component named AppInterface
export class AppInterface extends Component {
  static displayName = AppInterface.name;

  // Initialize state to hold the selected file
  state = {
    selectedFile: null,
  };

  // Function to trigger the file input dialog
  handleFileInputClick = () => {
    this.fileInput.click(); // Programmatically click the file input
  };

  // Function to handle file selection and read file contents
  handleFileInputChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Display file information
      const fileInfo = `File name: ${file.name}, File size: ${(file.size / 1024).toFixed(2)} KB`;
      this.setState({ selectedFile: file, fileInfo: fileInfo });

      // Read the file contents using FileReader
      const reader = new FileReader();
      reader.onload = (readEvent) => {
        console.log(readEvent.target.result); // Log the file contents to the console
      };
      reader.readAsText(file); // Read the file as text
    }
  };

  // Function to send the selected file to a server and navigate to another app
  handleRender = async () => {
    if (this.state.selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);

        // Post the file to the server using axios
        await axios.post('http://localhost:4000/upload-json', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Open a new tab with the React-Planner app
        window.open('http://localhost:9000', '_blank');

      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    } else {
      alert('Please select a JSON file to render.');
    }
  };

  // Render method to display the UI
  render() {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600">
        <div className='flex flex-col items-center justify-center text-left text-white ml-36 mr-36 mt-28'>
          <p>This is the app AppInterface</p>
          <p>Upload your JSON file here</p>
          <button onClick={this.handleFileInputClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
            Import JSON
          </button>
          {this.state.fileInfo && (
            <div className="text-sm mt-2">
              {this.state.fileInfo}
            </div>
          )}
          <br />
          <img src={Dummyrender} alt="Dummy render" width="700" height="500"></img>
          <br />
          <button onClick={this.handleRender} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Render and Go to React-Planner
          </button>
          <br />
          <input
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            ref={(input) => (this.fileInput = input)}
            onChange={this.handleFileInputChange}
          />
        </div>
      </div>
    );
  }
}

export default AppInterface;
