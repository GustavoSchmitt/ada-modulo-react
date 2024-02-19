import CaixaRestaurante from "../components/CaixaRestaurante/CaixaRestaurante";
import recipes from "../data/newRestaurants.json";

function PaginaRestaurantes() {
  return (
    <section>
      <h1>Restaurantes</h1>
      <input
        type="text"
        placeholder="Pesquisar pelo nome do restaurante, categoria ou descrição."
        id="search"
      />
      <label htmlFor="search">🔎</label>
      <ul className="grid" role="list">
        {recipes.recipes.map((recipe) => (
          <CaixaRestaurante key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
}

export default PaginaRestaurantes;
