import { Header } from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const Portfolio = () => {
  return (
    <div>
      <Header />
      <section className="projects">
        <div className="container-portfolio">
          <article className="container-project">
            <img src="../../public/images/jadoopc.png" alt="Jadoo" />
            <img
              src="../../public/images/jadoomobile.png"
              alt="Jadoo"
              className="mobile"
            />
            <div className="container-buttons">
              <a href="https://gregoryvdev.com/jadoo/" target="_blank">
                <CgWebsite size="25px" />
                Démo
              </a>
              <a
                href="https://github.com/GregoryVDev/acs-jadoo"
                target="_blank"
              >
                <FaGithub size="25px" /> Source Code
              </a>
            </div>
          </article>
          <article className="container-project">
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
              <a href="https://gregoryvdev.com/worldtravel/" target="_blank">
                <CgWebsite size="25px" />
                Démo
              </a>
              <a
                href="https://github.com/GregoryVDev/WorldTravel"
                target="_blank"
              >
                <FaGithub size="25px" /> Source Code
              </a>
            </div>
          </article>
          <article className="container-project">
            <img src="../../public/images/playverse.png" alt="PlayVerse" />
            <img
              src="../../public/images/playversemobile.png"
              alt="PlayVerse"
              className="mobile"
            />
            <div className="container-buttons">
              <a
                href="https://gregoryvdev.com/playverse/index.php"
                target="_blank"
              >
                <CgWebsite size="25px" />
                Démo
              </a>
              <a
                href="https://github.com/GregoryVDev/PlayVerse"
                target="_blank"
              >
                <FaGithub size="25px" /> Source Code
              </a>
            </div>
          </article>
          <article className="container-project">
            <img
              src="../../public/images/countriesflags.png"
              alt="Countries Flags"
            />
            <img
              src="../../public/images/countriesflagsmobile.png"
              alt="Countries Flags"
              className="mobile"
            />
            <div className="container-buttons">
              <a href="https://gregoryvdev.com/countriesflags/" target="_blank">
                <CgWebsite size="25px" />
                Démo
              </a>
              <a
                href="https://github.com/GregoryVDev/CountryFlag"
                target="_blank"
              >
                <FaGithub size="25px" /> Source Code
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
