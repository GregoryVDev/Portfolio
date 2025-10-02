import { Header } from "../Components/Header";
import { SocialIcons } from "../Components/SocialIcons";
import { useEffect } from "react";

export const Home = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <img src="/public/images/moi.jpg" alt="Photo de moi" />
        <h1>
          Je suis Grégory<span className="wave">👋</span>
        </h1>
        <h2 className="content">Développeur Web Full Stack</h2>
        <div className="dr"></div>
        <ul className="container-infos">
          <li>
            <span className="world" aria-label="world" role="img">
              ​🗺️​
            </span>
            Bordeaux
          </li>
          <li>
            <span className="job" aria-label="job" role="img">
              💻​
            </span>
            Recherche d'une alternance
          </li>
          <li>
            <span className="mail" aria-label="mail" role="img">
              📧
            </span>
            <a href="mailto:gregoryvdev@gmail.com" target="_blank">
              gregoryvdev@gmail.com
            </a>
          </li>
          <li>
            <span className="download" aria-label="download" role="img">
              📝
            </span>
            Télécharger{" "}
            <span className="resum">
              <a
                href="/images/gregory_cv_cda.pdf"
                download
                aria-label="Télécharger CV"
              >
                C.V
              </a>
            </span>
          </li>
        </ul>
        <SocialIcons />
      </section>
    </div>
  );
};
