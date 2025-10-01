import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

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

      <a
        href="/images/gregory_cv_cda.pdf"
        download
        className="mario-block"
        aria-label="Télécharger CV"
      >
        <span className="question-mark">?</span>
        <div className="icon">
          <FaFileDownload />
        </div>
      </a>

      <a
        href="mailto:gregoryvdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mario-block"
        aria-label="Email"
      >
        <span className="question-mark">?</span>
        <div className="icon">
          <IoMailOutline />
        </div>
      </a>
    </div>
  );
};
