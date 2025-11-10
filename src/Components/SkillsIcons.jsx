import React, { useState } from "react";
import "../index.css";
import "../about.css";
import { techCategories } from "../data/TechCategories";

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
      <h3>Mes technologies</h3>
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
              <ul
                className={`tech-list ${
                  cat.category === "FRONT-END"
                    ? "front-end"
                    : cat.category === "BACK-END"
                    ? "back-end"
                    : cat.category === "UX & UI"
                    ? "ux-ui"
                    : cat.category === "Outils"
                    ? "outils"
                    : ""
                }`}
              >
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
