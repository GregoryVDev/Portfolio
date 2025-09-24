import { FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si"; // MySQL est dans react-icons/si

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
    <div className="skills">
      {techs.map((tech, index) => (
        <div key={index} className="skill-item">
          {iconsMap[tech]}
          {index < techs.length - 1 && <span className="tiret">-</span>}
        </div>
      ))}
    </div>
  );
};
