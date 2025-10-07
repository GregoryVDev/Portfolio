import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMysql, SiReact } from "react-icons/si";
import "../index.css";
import "../about.css";

const techCategories = [
  {
    category: "FRONT-END",
    techs: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaNodeJs /> },
      { name: "React", icon: <SiReact /> },
    ],
  },
  {
    category: "BACK-END",
    techs: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
  },
  {
    category: "UX & UI",
    techs: [
      {name: "Figma", icon:       }
    ]
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
