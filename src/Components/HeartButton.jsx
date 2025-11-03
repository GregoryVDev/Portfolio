import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HeartButton() {
  // Savoir si le coeur est cliquable ou pas
  const [liked, setLiked] = useState(false);

  // Fonction appelée au clic
  function handleClick() {
    // Si liked = false il devient true et si on reclique il devient false
    setLiked(!liked);
  }

  return (
    <motion.div
      onClick={handleClick}
      // Animation pour faire rebondir le coeur quand on clique dessus
      whileTap={{ scale: 1.3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center justify-center cursor-pointer select-none"
      style={{ width: "60px", height: "60px" }}
    ></motion.div>
  );
}
