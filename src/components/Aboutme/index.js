import React from "react";
import Picture from "./picture";
import Story from "./story";
import Info from "./info";

function Aboutme() {
  return (
    <div className="relative">
      <span className="absolute h-20 w-20 -top-32" id="about"></span>
      <h1 className="m-10 text-4xl text-center">About me</h1>
      <div className="flex justify-center">
        <div className="w-9/12 mb-10 md:flex  lg:w-2/3">
          <Picture />
          <div>
            <Info />
            <Story />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
