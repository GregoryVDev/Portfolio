import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
     <div className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
