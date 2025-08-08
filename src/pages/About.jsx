import { Header } from "../Components/Header";
import { SocialIcons } from "../Components/SocialIcons";
import { IoMailOutline } from "react-icons/io5";


export const About = () => {
  return (
    <div>
      <Header />
      <section className="about">
        <img src="/public/images/moi.jpg" alt="Photo de moi" />
        <h1>Grégory <span className="nom">Yéramian</span></h1>
        <h2>Développeur fullstack</h2>
        <SocialIcons />
      </section>
    </div>
  );
};
