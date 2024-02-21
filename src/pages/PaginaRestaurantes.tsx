import { useEffect, useState } from "react";
import CaixaRestaurante from "../components/CaixaRestaurante/CaixaRestaurante";
import recipes from "../data/newRestaurants.json";

function PaginaRestaurantes() {

  function searchByParams(busca: string) {
    setRecipesList(
      recipes.recipes.filter(recipe => {
        if (
          atendeABusca(recipe.title,busca) ||
          atendeABusca(recipe.category,busca)

        ) return recipe
      }).map((recipe) => (
        <CaixaRestaurante key={recipe.id} recipe={recipe} />
      )))
  }

  function atendeABusca(valor: string, busca: string) {
    console.log(busca)
    return valor.toLowerCase().includes(busca.toLowerCase()) || busca.trim() === ''
  }

  const recipesDate = recipes.recipes
  const [busca, setBusca] = useState('')
  const [recipesList, setRecipesList] = useState(
    recipesDate.map((recipe) => (
      <CaixaRestaurante key={recipe.id} recipe={recipe} />
    )))

  const inputPesquisa = <input
    type="text"
    placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
    id="search"
    value={busca}
    onChange={e => {
      setBusca(e.target.value);
      searchByParams(e.target.value)
    }}
  />

  return (
    <section>
      <h1>Restaurantes</h1>
      {inputPesquisa}
      <label htmlFor="search">🔎</label>
      <ul className="grid" role="list">
        {recipesList}
      </ul>
    </section>
  );
}

export default PaginaRestaurantes;
