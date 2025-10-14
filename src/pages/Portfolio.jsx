import { Header } from "../Components/Header";
import React from "react";

export const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="container-portfolio">
        <div className="container-project">
          <img src="../../public/images/jadoopc.png" alt="Jadoo" />
          <img
            src="../../public/images/jadoomobile.png"
            alt="Jadoo"
            className="mobile"
          />
        </div>
        <div className="container-portfolio">
          <div className="container-project">
            <img
              src="../../public/images/worldtravelpc.png"
              alt="World Travel"
            />
            <img
              src="../../public/images/worldtravelmobile.png"
              alt="World Travel"
              className="mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
