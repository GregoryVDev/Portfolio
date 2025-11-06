import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Charger le thème qui a été enregistré dans le LocalStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      document.body.className = "light";
    }
  }, []);

  // Changement de thème
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.8rem",
        transition: "transform 0.2s",
      }}
      aria-label="Changer le thème"
    >
      {theme === "light" ? "🌑​" : "☀️"}
    </button>
  );
};
