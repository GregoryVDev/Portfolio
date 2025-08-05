import { Header } from "../Components/Header";

export const About = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <img src="/public/images/moi.jpg" alt="Photo de moi" />
        <h1>Grégory <span className="nom">Yéramian</span></h1>
        <h2>Développeur fullstack</h2>
      </section>
    </div>
  );
};
