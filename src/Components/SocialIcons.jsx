import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const SocialIcons = () => {
  return (
    <div className="medias">
      <a href="https://www.linkedin.com/in/gregoryvdev/" target="_blank" rel="noopener noreferrer" className="media">
        <FaLinkedin />
      </a>
      <a href="https://github.com/GregoryVDev" target="_blank" rel="noopener noreferrer" className="media">
        <FaGithub />
      </a>
      <a href="mailto:gregoryvdev@gmail.com" target="_blank" rel="noopener noreferrer" className="media">
        <IoMailOutline  />
      </a>
      <a href="../../public/images/gregory_yeramian_dwwm_alternance.pdf" download target="_blank" rel="noopener noreferrer" className="media">
        <FaFileDownload   />
      </a>
    </div>
  );
};
