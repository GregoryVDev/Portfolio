import React from "react";
import "../index.css"; // pour récupérer le style mario-block
import { SkillsIcons } from "../Components/SkillsIcons";

export const Skills = () => {
  const skills = ["html", "css", "js", "php", "mysql"]; // tes technos

  return (
    <section className="skills-section">
      <SkillsIcons techs={skills} />
    </section>
  );
};
