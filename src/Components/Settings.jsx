import { useState } from "react";

export function Settings() {
  const [open, setOpen] = useState(false);

  const changeColor = (type, color) => {
    if (type === "text") {
      document.body.style.color = color;
    } else if (type === "button") {
      const links = document.querySelectorAll(".container-buttons a");
      links.forEach((link) => {
        link.style.borderColor = color;
      });
    }
  };

  return (
    <div className="settings-container">
      <button id="settings-btn" onClick={() => setOpen(!open)}>
        ⚙️
      </button>

      {open && (
        <div id="settings-menu">
          <div className="color-group">
            <h4>Couleur des bordures</h4>
            <div className="color-options">
              <span
                className="color-square"
                style={{ backgroundColor: "#F3D30D" }}
                onClick={() => changeColor("button", "#F3D30D")}
              />
              <span
                className="color-square"
                style={{ backgroundColor: "#FFFFFF" }}
                onClick={() => changeColor("button", "#FFFFFF")}
              />
              <span
                className="color-square"
                style={{ backgroundColor: "red" }}
                onClick={() => changeColor("button", "red")}
              />
            </div>
          </div>

          <div className="color-group">
            <h4>Couleur du texte</h4>
            <div className="color-options">
              <span
                className="color-square"
                style={{ backgroundColor: "#FF6D00" }}
                onClick={() => changeColor("text", "#FF6D00")}
              />
              <span
                className="color-square"
                style={{ backgroundColor: "#00C853" }}
                onClick={() => changeColor("text", "#00C853")}
              />
              <span
                className="color-square"
                style={{ backgroundColor: "#B0BEC5" }}
                onClick={() => changeColor("text", "#B0BEC5")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
