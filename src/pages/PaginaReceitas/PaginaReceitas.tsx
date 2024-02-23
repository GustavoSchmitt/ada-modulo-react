import CaixaRestaurante from "../../components/CaixaRestaurante/Receita";
import recipes from "../../data/newRestaurants.json";
import { Link } from "react-router-dom";
// import './PaginaReceitas.scss'

export function PaginaReceitas() {

  return (
    <section>
      <h1>Receitas</h1>
      <Link to={"/search"}>
        <button>
          Pesquisar receitas
        </button>
      </Link>

      <ul className="grid" role="list">
        {
          // mapeando receitas filtradas e passando todas as props
          recipes.recipes.map((props) => {
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

