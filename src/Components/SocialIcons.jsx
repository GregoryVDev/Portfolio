import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const SocialIcons = () => {
  return (
    <div className="medias">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="media">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="media">
        <FaGithub />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="media">
        <IoMailOutline  />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="media">
        <FaFileDownload   />
      </a>
    </div>
  );
};
