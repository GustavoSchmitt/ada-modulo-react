import { useState } from "react";
import CaixaRestaurante from "../components/CaixaRestaurante/Receita";
import recipes from "../data/newRestaurants.json";

export function PaginaRestaurantesSearch() {
  function atendeABusca(valor: string, busca: string) {
    return (
      valor.toLowerCase().includes(busca.toLowerCase()) || busca.trim() === ""
    );
  }

  const recipesDate = recipes.recipes;

  const [busca, setBusca] = useState("");

  const inputPesquisa = (
    <input
      type="text"
      placeholder="Pesquisar pelo nome da receita, categoria ou porções."
      id="search"
      value={busca}
      onChange={(e) => {
        setBusca(e.target.value);
      }}
    />
  );

  // receitas filtradas, prontas para mapear
  const recipesFiltered = recipesDate.filter((recipe) => {
    if (
      atendeABusca(recipe.title, busca) ||
      atendeABusca(recipe.servings, busca) ||
      atendeABusca(recipe.prepTime, busca) ||
      atendeABusca(recipe.category, busca)
    )
      return recipe;
    return;
  });

  return (
    <section>
      <h1>Receitas</h1>
      <ul className="grid" role="list">
        {
          // mapeando receitas filtradas e passando todas as props
          recipesFiltered.map((props) => {
            const {
              glutenFree,
              vegetarian,
              id,
              image,
              title,
              category,
              servings,
              prepTime,
            } = props;

            return (
              <CaixaRestaurante key={id}
                glutenFree={glutenFree}
                vegetarian={vegetarian}
                id={id}
                image={image}
                title={title}
                category={category}
                servings={servings}
                prepTime={prepTime}
              />
            );
          })}
      </ul>
    </section>
  );
}

