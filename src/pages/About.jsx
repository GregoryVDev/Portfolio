import { Header } from "../Components/Header";
import React, { useState } from "react";
import { SkillsIcons } from "../Components/SkillsIcons";

export const About = () => {
  // Liste des questions et de réponses
  const faqData = [
    {
      question: "Qui suis-je ?",
      answer:
        "Je m'appelle Grégory, j'ai 29 ans et je suis un ancien second de cuisine. J'habite à côté de Libourne et je suis en reconversion professionnelle pour devenir Concépteur Développeur d'Application.",
    },
    {
      question:
        "Pourquoi j'ai choisi de quitter la cuisine pour m'orienter vers le développement web ?",
      answer:
        "Après 15 ans derrière les fourneaux, j'ai décidé de relever de nouveaux défis tout en restant dans la créativité. Le code me permet de construire, tester et améliorer mes projets. (Un peu comme une recette, mais sans les brûlures !)",
    },
    {
      question: "Qu'est-ce que je préfère dans le développement web ?",
      answer:
        "Ce que j'adore c'est de voir un projet qui prend vie ligne par ligne, résoudre des problèmes, comprendre pourquoi et trouver une solution.",
    },
    {
      question: "Quel est mon objectif professionnel ?",
      answer:
        "Mon objectif professionnel, c'est de trouver une alternance afin de poursuivre mes études en bachelor en tant que Concépteur Développeur d'Application.",
    },
  ];

  // Stocker plusieurs index ouverts dans le tableau
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // Si la question est déjà ouverte, on la retire du tableau
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Sinon, on l'ajoute au tableau
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div>
      <Header />
      <div className="container-informations">
        <section className="infos">
          <h1>À propos de moi</h1>
          <p>
            Titulaire d'un C.A.P Cuisine obtenu en 2013, j'ai exercé ce métier
            pendant douze années, ce qui m'a permis de développer des
            compétences solides en organisation, sens des responsabilités,
            créativité et rapidité d'exécution. Travailler en cuisine m'a appris
            à gérer la pression, à rester concentré même dans les moments les
            plus intenses, et à ne jamais négliger le moindre détail, car chaque
            geste compte pour obtenir un résultat parfait.
          </p>
          <p>
            En 2024, j'ai décidé de me reconvertir dans le développement web, un
            domaine qui me passionne et dans lequel je retrouve les mêmes
            valeurs qu'en cuisine : organisation, rapidité, sens des
            responsabilités et créativité. Le développement web me permet de
            construire des projets de A à Z, de tester des idées, de résoudre
            des problèmes concrets et de voir directement le fruit de mon
            travail, ce qui est extrêmement gratifiant.
          </p>
          <p>
            Ce que j'aime dans ce métier, c'est la créativité et la liberté
            qu'il offre. J'apprécie autant travailler sur le front-end que sur
            le back-end, car chaque côté présente ses propres défis et
            possibilités. J'aime chercher des solutions élégantes et efficaces,
            comprendre comment fonctionne chaque système et apprendre de
            nouvelles technologies pour améliorer mes compétences. Pour moi,
            chaque projet est un véritable défi et une occasion de progresser.
          </p>
          <p>
            En dehors du développement, je suis une personne curieuse et
            déterminée. Je suis passionné de musique, notamment le piano et le
            chant, et je joue aussi à des jeux vidéo, ce qui me permet de
            développer ma logique, ma créativité et ma patience. Ces passions
            nourrissent ma façon d'aborder le développement : chaque projet
            devient comme un “jeu” où je cherche à optimiser, tester et
            améliorer mes compétences.
          </p>
          <p>
            Je sais qu'il me reste encore beaucoup à apprendre, mais je suis
            motivé, ambitieux et toujours prêt à relever de nouveaux défis. Mon
            objectif est de continuer à progresser, à acquérir de nouvelles
            compétences techniques, à créer des projets qui ont du sens et à
            toujours garder cette curiosité et cette passion qui me
            caractérisent depuis mes débuts.
          </p>
        </section>
        <div className="container-faq">
          <section className="faq">
            <h2>Foire aux questions</h2>
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${
                      openIndexes.includes(index) ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    <span className="faq-icon">
                      {openIndexes.includes(index) ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    className={`faq-answer ${
                      openIndexes.includes(index) ? "show" : ""
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="skills">
            <SkillsIcons />
          </section>
        </div>
      </div>
    </div>
  );
};
