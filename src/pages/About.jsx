import { Header } from "../Components/Header";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <img src="/public/images/moi.jpg" alt="Photo de moi" />
        <h1>Grégory <span className="nom">Yéramian</span></h1>
      </div>
    </div>
  );
};
