import { Link } from "react-router-dom";
import './CaixaRestaurante.css'


export interface Recipe {
  title: string;
  id: number;
  category: string;
  prepTime: string;
  servings: string;
  image: string;
  vegetarian: boolean;
  glutenFree: boolean;

}
interface CaixaRestauranteProps {
  recipe: Recipe;
}

function CaixaRestaurante(props: CaixaRestauranteProps) {
  const {
    recipe: { title, category, prepTime, id, servings, image, vegetarian, glutenFree },
  } = props;

  const glutenFreeFood = glutenFree ? <span className="small-details">
    Livre de Glúten
  </span> : null
  
  const vegetarianFood = vegetarian ? <span className="small-details">
    Vegetariano
  </span> : null

  return (
    <li className="restaurant-box">
      <Link to={`${id}/cardapio`}>
        <img src={image} alt='' />
        <h2>📍 {title}</h2>
        <div className="details">
          <span className="small-details">{category}</span>
          <span className="small-details">
            {servings}
          </span>
          {glutenFreeFood}
          {vegetarianFood}
        </div>
        <span className="small-details">
          <svg height={'0.75rem'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
          {' ' + prepTime}
        </span>
      </Link>
    </li>
  );
}

export default CaixaRestaurante;
