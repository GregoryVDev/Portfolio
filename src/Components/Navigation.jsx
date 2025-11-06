import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  return (
    <header className="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
    </header>
  );
};
