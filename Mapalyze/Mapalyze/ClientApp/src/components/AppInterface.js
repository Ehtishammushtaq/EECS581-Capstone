import React, { Component } from 'react';
import Dummyrender from '../Assets/Dummyrender.jpg';
import classes from './Appinterface.module.css';
export class AppInterface extends Component {
  static displayName = AppInterface.name;

  // Function to trigger the file input dialog
  handleFileInputClick = () => {
    this.fileInput.click();
  };

  // Function to handle file selection
  handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Get the file extension
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

      // Check if the file type is allowed (JPG, JPEG, or PDF)
      if (['jpg', 'jpeg', 'pdf'].includes(fileExtension)) {
        // You can now work with the selected file here

        // Create a download link for the selected file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(selectedFile);
        downloadLink.download = selectedFile.name;

        // Trigger a click event on the download link to prompt the user to download the file
        downloadLink.click();
      } else {
        alert('Please select a valid JPG, JPEG, or PDF file.');
        // Clear the file input
        this.fileInput.value = '';
      }
    }
  };

  render() {
    return (
      <div className={classes.appinterface}>
        <p>This is the app AppInterface</p>
        <p>Upload your files here</p>
        <button onClick={this.handleFileInputClick}>Import</button>
        <br/>
        <br/>
        <img src = {Dummyrender} alt="Dummy render" width="700" height="500"></img>
        <br/>
        <br/>
        <button>Render (dummy button)</button>
        <br/>

        {/* Hidden file input element */}
        <input
          type="file"
          style={{ display: 'none' }}
          ref={(input) => (this.fileInput = input)}
          onChange={this.handleFileInputChange}
        />
      </div>
    );
  }
}

export default AppInterface;
