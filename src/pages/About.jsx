import { Header } from "../Components/Header";
import React, { useState } from "react";
import { Skills } from "../Components/Skills";

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
      <section className="infos">
        <h1>À propos de moi</h1>
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
        <p></p>
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
        <h2>
          Mes technos ? <span className="low">Découvrons les...</span>
        </h2>
        <Skills />
      </section>
    </div>
  );
};
