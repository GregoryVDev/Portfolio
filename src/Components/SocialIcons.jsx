import React from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const SocialIcons = () => {
  return (
    <div>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <IoMailOutline  />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaFileDownload   />
      </a>
    </div>
  );
};
