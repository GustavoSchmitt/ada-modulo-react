import { Link, useParams } from "react-router-dom";
import recipes from '../../data/newRestaurants.json'
import './PaginaReceita.scss'

export function PaginaReceita() {
  const { slug: idDaUrl } = useParams();
  const recipe = recipes.recipes.filter(
    (recipe) => recipe.id === Number(idDaUrl)
  )[0];
  const video = recipe.videoUrl ? <iframe className="iframe" src={recipe.videoUrl} /> : null
  const conteudoPrincipal = recipe.videoUrl ? video : <img className="img" src={recipe.image} />
  const conteudoSecundario = recipe.videoUrl ? <img className="img-secondary" src={recipe.image} /> : null


  return (
    <>
      <Link to={"/"}>‹ Todas as receitas</Link>
      <section className="flex-column">
        <h1>{recipe.title}</h1>
        <div className="main-media">
          {conteudoPrincipal}
          <span className="intro">
            <strong>Ingredientes: </strong>
            {recipe.ingredients}
          </span>
        </div>
        <div className="flex-column">
          <div className="ingredients-instructions">
            {conteudoSecundario}

          </div>
          <span className="intro">
            <strong>Modo de Preparo: </strong>
            {recipe.instructions}
          </span>
        </div>

        <ul
          className="grid"
          role="list"
          style={{ "--max": "300px" } as React.CSSProperties}
        >

        </ul>
      </section>
    </>
  );
}

