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
              <button>
                <a href="#">
                  <CgWebsite size="25px" />
                  Démo
                </a>
              </button>
              <button>
                <a href="#">
                  <FaGithub size="25px" /> Source Code
                </a>
              </button>
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
                <button>
                  <a href="#">
                    <CgWebsite size="25px" />
                    Démo
                  </a>
                </button>
                <button>
                  <a href="#">
                    <FaGithub size="25px" /> Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
