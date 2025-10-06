import { FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

// Carte des icônes par techno
const iconsMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaNodeJs />,
  php: <FaPhp />,
  mysql: <SiMysql />,
};

export const SkillsIcons = ({ techs = [] }) => {
  return (
    <div className="skills-container">
      {techs.map((tech, index) => (
        <div key={index} className="mario-block">
          <span className="question-mark">?</span>
          <div className="icon">{iconsMap[tech]}</div>
        </div>
      ))}
    </div>
  );
};
