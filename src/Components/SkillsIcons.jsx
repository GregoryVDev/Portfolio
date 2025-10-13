import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMysql, SiReact } from "react-icons/si";
import "../index.css";
import "../about.css";

const techCategories = [
  {
    category: "FRONT-END",
    techs: [
      {
        name: "HTML & CSS",
        icon: (
          <div className="html-css-group">
            <img src="../../public/images/html5.svg" alt="HTML" />
            <img src="../../public/images/css3.svg" alt="CSS" />
          </div>
        ),
      },
      {
        name: "JavaScript & React",
        icon: (
          <div className="js-react-group">
            <img src="../../public/images/javascript.svg" alt="JS" />
            <img src="../../public/images/react.svg" alt="React" />
          </div>
        ),
      },
      {
        name: "Bootstrap & SASS",
        icon: (
          <div className="boot-sass-group">
            <img src="../../public/images/bootstrap.svg" alt="Bootstrap" />
            <img src="../../public/images/sass.svg" alt="SASS" />
          </div>
        ),
      },
    ],
  },
  {
    category: "BACK-END",
    techs: [
      {
        name: "PHP",
        icon: <img src="../../public/images/php.svg" alt="PHP" />,
      },
      {
        name: "MySQL",
        icon: <img src="../../public/images/mysql.svg" alt="MySQL" />,
      },
      {
        name: "Docker",
        icon: <img src="../../public/images/docker.svg" alt="Docker" />,
      },
    ],
  },
  {
    category: "UX & UI",
    techs: [
      {
        name: "Figma",
        icon: <img src="../../public/images/figma.svg" alt="Figma" />,
      },
      {
        name: "Wireframe",
        icon: <img src="../../public/images/wireframe.jpg" alt="Wireframe" />,
      },
    ],
  },
  {
    category: "Outils",
    techs: [
      {
        name: "Github",
        icon: (
          <img
            src="../../public/images/github_logo_icon_229278.png"
            alt="Github"
          />
        ),
      },
      {
        name: "Trello",
        icon: (
          <img
            src="../../public/images/trello-logo-slack-atlassian-trello.jpg"
            alt="Trello"
          />
        ),
      },
    ],
  },
];

export const SkillsIcons = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCategory = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq">
      <h2>Mes technologies</h2>
      <div className="faq-container">
        {techCategories.map((cat, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                openIndexes.includes(index) ? "active" : ""
              }`}
              onClick={() => toggleCategory(index)}
            >
              {cat.category}
              <span className="faq-icon">
                {openIndexes.includes(index) ? "-" : "+"}
              </span>
            </button>

            <div
              className={`faq-answer ${
                openIndexes.includes(index) ? "show" : ""
              }`}
            >
              <ul className="tech-list">
                {cat.techs.map((tech, i) => (
                  <li key={i} className="tech-item">
                    {tech.icon}
                    <span className="tech-name">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
