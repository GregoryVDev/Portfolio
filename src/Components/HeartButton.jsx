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
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
        // Il devient rouge si il est cliqué sinon il ne change pas
        fill={liked ? "red" : "none"}
        stroke="red"
        strokeWidth="2"
        // Petit rebond quand le coeur devient rouge
        animate={{ scale: liked ? [1, 1.4, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M12 21s-7-4.35-10-9a6 6 0 0 1 9-7c1 1 1.8 2 1.8 2s0.8-1 1.8-2a6 6 0 0 1 9 7c-3 4.65-10 9-10 9z" />
      </motion.svg>
    </motion.div>
  );
}
