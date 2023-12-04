import React, { Component } from "react";

export class AboutUs extends Component {
  static displayName = AboutUs.name;

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r dark:bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r mt-8">
        <div className="text-white text-center px-8 py-12">
          <h2 className="text-3xl font-semibold mb-8">
            MAPALYZE - Make Floor Plans Navigable
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Team Members</h3>
            <ul className="">
              <li>Asrar Farooq</li>
              <li>Ehtisham Mushtaq</li>
              <li>Mai Duong</li>
              <li>Nikhil Singla</li>
              <li>Huy Truong</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Project Description</h3>
            <p className="text-lg mb-4">
              App: A web app that takes a scanned 2D floor plan and converts it
              into a navigable 3D Model.
            </p>
            <p className="text-lg mb-4">
              Idea: Combination of 2D to 3D floor plan conversion + Indoor
              Mapping & Navigation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Working Theory</h3>
            <ol className="">
              <li>Scan Floor Plans/Select Pre-scanned Images</li>
              <li>Correctly Identify All Attributes</li>
              <li>Parse Floor Plans to JSON</li>
              <li>Render Data from Images to a 3D Model</li>
              <li>Make the Floor Plan Navigable</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
            <ul className="">
              <li>
                Improve scanning to parse more attributes, including complex
                ones like stairs, etc.
              </li>
              <li>
                Implement navigation: determining how to locate a person inside
                a floor.
              </li>
              <li>
                Implementing a voice-over feature to make the app accessible for
                specially-abled people.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;