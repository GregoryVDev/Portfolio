import { Header } from "../Components/Header";
import { SocialIcons } from "../Components/SocialIcons";
import { SkillsIcons } from "../Components/SkillsIcons";
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
            <span className="coffee" aria-label="coffee" role="img">
              ☕
            </span>
            Un petit café ?
          </li>
          <li>
            <span className="world" aria-label="world" role="img">
              🌎
            </span>
            Bordeaux
          </li>
          <li>
            <span className="job" aria-label="job" role="img">
              💼
            </span>
            En recherche d'une alternance Concepteur Développeur d'Application
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
        <h2>A propos de moi</h2>
        <p>
          Titulaire d'un C.A.P Cuisine obtenu en 2013, j'ai exercé ce métier
          pendant douze années, ce qui m'a permis de développer des compétences
          solides en organisation, sens des responsabilités, créativité et
          rapidité d'exécution.
        </p>
        <p>
          En 2024, j'ai décidé de faire une reconversion dans le développement
          web, un domaine qui me passionne et dans lequel je retrouve les mêmes
          valeurs qu'en cuisine : organisation, rapidité, sens des
          responsabilités et créativité.
        </p>
        <p>
          Ce que j'aime dans ce métier, c'est la créativité. J'apprécie autant
          travailler sur le front-end que le back-end. J'y trouve toujours de
          nouveaux défis, et j'ai envie d'apprendre de nouvelles technologies.
        </p>
        <p>
          Je sais qu'il me reste encore beaucoup à apprendre, mais je suis
          motivé, ambitieux et toujours prêt à relever de nouveaux défis.
        </p>
      </section>
      <section className="projects">
        <h2>Mes projets 💻</h2>
        <div className="container-projects">
          <article className="project">
            <figure>
              <img src="../../public/images/Jadoo.png" alt="Site Jadoo" />
              <figcaption>
                <h3>Jadoo</h3>
                <div className="container-icons">
                  <SkillsIcons techs={["html", "css", "js"]} />
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="container-projects">
          <article className="project">
            <figure>
              <img
                src="../../public/images/worldtravel.png"
                alt="Site World Travel"
              />
              <figcaption>
                <h3>World Travel</h3>
                <div className="container-icons">
                  <SkillsIcons techs={["html", "css", "js"]} />
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="container-projects">
          <article className="project">
            <figure>
              <img
                src="../../public/images/feariend.png"
                alt="Site World Travel"
              />
              <figcaption>
                <h3>Take a FeaRIEND</h3>
                <div className="container-icons">
                  <SkillsIcons techs={["html", "css", "js", "php", "mysql"]} />
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="container-projects">
          <article className="project">
            <figure>
              <img
                src="../../public/images/onlinetraining.png"
                alt="Site World Travel"
              />
              <figcaption>
                <h3>Onlinetraining</h3>
                <div className="container-icons">
                  <SkillsIcons techs={["html", "css", "js", "php", "mysql"]} />
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
        <div className="container-projects">
          <article className="project">
            <figure>
              <img
                src="../../public/images/sevac.png"
                alt="Site World Travel"
              />
              <figcaption>
                <h3>Sevac</h3>
                <div className="container-icons">
                  <SkillsIcons techs={["html", "css", "js", "php"]} />
                </div>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </div>
  );
};
