import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen bg-[#0f172a] text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}