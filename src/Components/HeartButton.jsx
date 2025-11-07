import React, { useState } from "react";
import { motion } from "framer-motion";

export const HeartButton = () => {
  // Etat pour savoir combien le coeur est rempli
  const [fillPercent, setFillPercent] = useState(0);
  // Clé unique pour déclencher les confettis à chaque explosion
  const [confettiKey, setConfettiKey] = useState(0);

  // Quand on clique sur le coeur :
  const handleClick = () => {
    setFillPercent((prev) => {
      // On augmente le fill de 5% à chaque clic jusqu'à 100%
      const next = prev + 5 > 100 ? 100 : prev + 5;
      // Si le cœur est à 100% :
      if (next === 100) {
        // déclenche l'explosion uniquement quand le cœur devient plein (changement de clé)
        setConfettiKey((prev) => prev + 1);
      }
      // on met à jour l'état fillPercent
      return next;
    });
  };

  const color = `rgb(255, ${Math.floor(165 - fillPercent * 1.65)}, 0)`;
  const confettiColors = ["#FF3B3B", "#FF9A3B", "#FFD23B", "#FF6F91"];

  return (
    <motion.div
      // On appel handleClick au clique
      onClick={handleClick}
      whileTap={{ scale: 1.3 }} // Zoomer légèrement quand on clique
      className="heart-container floating-heart"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -2 28 28" // <-- marge élargie pour ne rien couper
        className="heart"
        width="30"
        height="30"
      >
        <defs>
          {/* Dégrader pour remplir progressivement le coeur */}
          <linearGradient id="heartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <motion.stop
              offset={`${fillPercent}%`}
              stopColor={color}
              animate={{ offset: `${fillPercent}%` }}
              transition={{ duration: 0.3 }}
            />
            {/* Coeur vide */}
            <stop offset={`${fillPercent}%`} stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Forme coeur */}
        <path
          fill="url(#heartGradient)"
          stroke="red"
          strokeWidth="2"
          d="M12 21s-7-4.35-10-9a6 6 0 0 1 9-7c1 1 1.8 2 1.8 2s0.8-1 1.8-2a6 6 0 0 1 9 7c-3 4.65-10 9-10 9z"
        />
      </motion.svg>

      {/* Confettis pour le cœur si il est plein */}
      {fillPercent === 100 && (
        <Confetti key={confettiKey} colors={confettiColors} />
      )}
    </motion.div>
  );
};

const Confetti = ({ colors }) => {
  return (
    <div className="confetti-container">
      {[...Array(30)].map((_, i) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={i}
            className="confetti"
            style={{ backgroundColor: color }}
            initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            animate={{
              y: -100 - Math.random() * 50,
              x: (Math.random() - 0.5) * 60,
              rotate: Math.random() * 360,
              opacity: 0,
              scale: 0.5 + Math.random() * 0.5,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
};
