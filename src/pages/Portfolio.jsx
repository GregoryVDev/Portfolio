import { Header } from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const Portfolio = () => {
  return (
    <div>
      <Header />
      <section className="projects">
        <div className="container-portfolio">
          <div className="container-project">
            <img src="../../public/images/jadoopc.png" alt="Jadoo" />
            <img
              src="../../public/images/jadoomobile.png"
              alt="Jadoo"
              className="mobile"
            />
            <div className="container-buttons">
              <a href="https://gregoryvdev.com/jadoo/">
                <CgWebsite size="25px" />
                Démo
              </a>
              <a href="https://github.com/GregoryVDev/acs-jadoo">
                <FaGithub size="25px" /> Source Code
              </a>
            </div>
          </div>
          <div className="container-portfolio">
            <div className="container-project">
              <img
                src="../../public/images/worldtravelpc.png"
                alt="World Travel"
              />
              <img
                src="../../public/images/worldtravelmobile.png"
                alt="World Travel"
                className="mobile"
              />
              <div className="container-buttons">
                <a href="#">
                  <CgWebsite size="25px" />
                  Démo
                </a>
                <a href="#">
                  <FaGithub size="25px" /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
