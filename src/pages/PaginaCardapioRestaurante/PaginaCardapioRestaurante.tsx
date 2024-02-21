import { Link, useParams } from "react-router-dom";
import recipes from '../../data/newRestaurants.json'
import videojs from 'video.js'

function PaginaCardapioRestaurante() {
  const { slug: idDaUrl } = useParams();
  const recipe = recipes.recipes.filter(
    (recipe) => recipe.id === Number(idDaUrl)
  )[0];
  const video = recipe.videoUrl ? <iframe src={recipe.videoUrl} width={'500px'} height={'500px'}></iframe> : null

  return (
    <section>
      <Link to={"/"}>‹ Todos os restaurantes</Link>
      <h1>{recipe.title}</h1>
      <div>
        <img src={recipe.image} />
        {video}
      </div>
      <p className="intro">{recipe.ingredients}</p>

      <ul
        className="grid"
        role="list"
        style={{ "--max": "300px" } as React.CSSProperties}
      >

      </ul>
    </section>
  );
}

export default PaginaCardapioRestaurante;
