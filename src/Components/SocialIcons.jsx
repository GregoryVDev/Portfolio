import { FaLinkedin, FaGithub } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="medias">
      <a
        href="https://github.com/GregoryVDev"
        target="_blank"
        rel="noopener noreferrer"
        className="media"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/gregoryvdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="media"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};
