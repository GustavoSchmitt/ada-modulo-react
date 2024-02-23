import { Route, Routes } from "react-router-dom";
import { PaginaRestaurantesSearch } from "../pages/PaginaReceitasSearch";
import { PaginaReceitas } from "../pages/PaginaReceitas/PaginaReceitas";
import { PaginaReceita } from "../pages/PaginaReceita/PaginaReceita";

function Rotas() {
  return (
    // Qual é o caminho, e o que será exibido naquele caminho
    <Routes>
      <Route path="/" element={<PaginaReceitas />} />
      <Route path="/:slug/cardapio" element={<PaginaReceita />} />
      <Route path="/search" element={<PaginaRestaurantesSearch />} />

    </Routes>
  );
}

export default Rotas;
