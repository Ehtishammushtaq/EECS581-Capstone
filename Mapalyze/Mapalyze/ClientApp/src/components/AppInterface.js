import React, { Component } from "react";

export class AppInterface extends Component {
  static displayName = AppInterface.name;

  constructor(props) {
    super(props);

    this.state = {
      editorOpen: false,
    };

    // Create a ref for the iframe
    this.editorIframe = React.createRef();
  }

  // Function to trigger the file input dialog
  handleFileInputClick = () => {
    this.fileInput.click();
  };

  // Function to handle file selection
  handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Get the file extension
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      // Check if the file type is allowed (JPG, JPEG, or PDF)
      if (["jpg", "jpeg", "pdf"].includes(fileExtension)) {
        // You can now work with the selected file here

        // Create a download link for the selected file
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(selectedFile);
        downloadLink.download = selectedFile.name;

        // Trigger a click event on the download link to prompt the user to download the file
        downloadLink.click();
      } else {
        alert("Please select a valid JPG, JPEG, or PDF file.");
        // Clear the file input
        this.fileInput.value = "";
      }
    }
  };

  // Function to toggle the editor
  toggleEditor = () => {
    this.setState(
      (prevState) => ({
        editorOpen: !prevState.editorOpen,
      }),
      () => {
        if (this.state.editorOpen && this.editorIframe.current) {
          // Reload the iframe when opening the editor
          this.editorIframe.current.src =
            "https://cvdlab.github.io/react-planner/";
        }
      }
    );
  };



  render() {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'">
        <div className="flex flex-col items-center justify-center text-left text-white ml-36 mr-36 mt-28">
          <p>Upload Floor Plans </p>
          <p>Render Floor Plans </p>
          <p>Fiddle With Editor </p>
          <button
            onClick={this.handleFileInputClick}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Import
            
          </button>

          {/*
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              onClick={this.toggleEditor}
              href = "https://asrarfarooq.github.io/Mapalyze/"
            
            >
              {this.state.editorOpen ? "Close Editor" : "Open Editor"}
            </button>
          
            {this.state.editorOpen && (
              <iframe
                ref={this.editorIframe}
                title="Editor"
                width="1200"
                height="600"
                style={{ border: "none", marginTop: "20px" }}
              />
            )}
            */}
            <a href = "https://ashy-cliff-050f7cc10.4.azurestaticapps.net" >
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 ">
              Editor
            </button>
            </a>
            
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Render
          </button>
          <br />

          {/* Hidden file input element */}
          <input
            type="file"
            style={{ display: "none" }}
            ref={(input) => (this.fileInput = input)}
            onChange={this.handleFileInputChange}
          />
        </div>
      </div>
    );
  }
}

export default AppInterface;