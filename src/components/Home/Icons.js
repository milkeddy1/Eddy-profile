import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function Icons() {
  const [iconStatus, setIconStatus] = useState(false);
  // const firstIcon = document.querySelector('.hovereffect')
  // firstIcon.addEventListener('mouseover', () => {
  //     console.log('123');
  // })
  const style = { color: "white" };
  return (
    <div className="flex justify-around md:mr-20 lg:block mr-0 mt-20">
      <a
        href="https://www.facebook.com/profile.php?id=100001639983126"
        className="hovereffect flex"
      >
        <BsFacebook
          size={35}
          style={style}
          className="  hover:fill-gray-700  mb-10 hover:animate-spin"
        />
      </a>

      <a href="https://github.com/milkeddy1">
        <BsGithub
          size={35}
          style={style}
          className="hover:fill-gray-700 mb-10"
        />
      </a>
      <a href="https://codepen.io/azmfvbbz-the-sans">
        <AiFillCodeSandboxCircle
          size={35}
          style={style}
          className="hover:fill-gray-700"
        />
      </a>
    </div>
  );
}

export default Icons;
