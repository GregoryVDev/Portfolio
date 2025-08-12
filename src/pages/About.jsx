import { Header } from "../Components/Header";
import { SocialIcons } from "../Components/SocialIcons";

export const About = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <img src="/public/images/moi.jpg" alt="Photo de moi" />
        <h1>
          Grégory <span className="nom">Yéramian</span>
        </h1>
        <h2>Développeur fullstack</h2>
        <div className="dr"></div>
        <SocialIcons />

        <h2>
          A propos de moi <span className="wave">👋</span>
        </h2>
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
              <a href="">
                <img src="../../public/images/Jadoo.png" alt="" />
              </a>
              <figcaption>
                <h3>Jadoo</h3>
                <p></p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
    </div>
  );
};
