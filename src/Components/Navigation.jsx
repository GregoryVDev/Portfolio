import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
     <div className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Compétences
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
