import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { Projects } from "./Components/Projects.jsx";
import { Skills } from "./Components/Skills.jsx";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
    </BrowserRouter>
  );
}
