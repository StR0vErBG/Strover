"use client"
import { ToastContainer } from "react-toastify";

import React from "react";

const Footer = () => {
  return (
    <>
      {/* <footer className="absolute left-0 w-full -bottom-44 "> */}
        {/* <SvgComponent /> */}
      {/* </footer> */}
      <ToastContainer />
      
    </>
  );
};

export default Footer;

const SvgComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 282">
    <path
    className="glasmorphism-bg-fill"
      // className="fill-gray-200"
      d="m0 32 60 26.7C120 85 240 139 360 144s240-37 360-26.7C840 128 960 192 1080 192s240-64 300-96l60-32v256H0Z"
    />
  </svg>
);
