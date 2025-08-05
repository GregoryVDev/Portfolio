import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Compétences</li>
        </NavLink>
      </ul>
    </div>
  );
};
