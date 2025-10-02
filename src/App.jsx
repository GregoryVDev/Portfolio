import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx"
import { Portfolio } from "./pages/Portfolio.jsx";
import "./App.css";


export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
    </BrowserRouter>
  );
}
