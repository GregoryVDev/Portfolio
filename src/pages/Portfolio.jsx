import { Header } from "../Components/Header";
import React from "react";

export const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="container-portfolio">
        <img src="../../public/images/jadoopc.png" alt="Jadoo" />
        <img
          src="../../public/images/jadoomobile.png"
          alt="Jadoo"
          className="mobile"
        />
      </div>
    </div>
  );
};
