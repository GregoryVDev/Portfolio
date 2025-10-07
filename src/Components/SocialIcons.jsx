import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <div className="medias">
      <a
        href="https://github.com/GregoryVDev"
        target="_blank"
        rel="noopener noreferrer"
        className="mario-block"
        aria-label="GitHub"
      >
        <span className="question-mark">?</span>
        <div className="icon">
          <FaGithub />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/gregoryvdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mario-block"
        aria-label="LinkedIn"
      >
        <span className="question-mark">?</span>
        <div className="icon">
          <FaLinkedin />
        </div>
      </a>
    </div>
  );
};
