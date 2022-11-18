import { useContext } from "react";
import { context } from "../../AppContext";

import "./drink-card.style.css";

function DrinkCard({ drink }) {
  const { name, description, imageUrl, recipe } = drink;

  const { addItemToList } = useContext(context);

  return (
    <div className="drinks-card-container">
      <div className="drinks-image-container">
        <img src={imageUrl} className="drinks-image" alt={name} />
      </div>
      <div className="drinks-info">
        <h3 className="drinks-name">{name}</h3>
        <p className="drinks-description">{description}</p>
        <div className="button-container">
          <a href={recipe} target="_blank" rel="noreferrer">
            <button
              className="waves-effect waves-light btn-large"
              // onClick={() => navigate("/beans")}
            >
              Recipe
              <i className="large material-icons right">link</i>
            </button>
          </a>
          <button
            className="waves-effect waves-light btn-large"
            onClick={() => addItemToList(drink, "drinks")}
          >
            <i className="large material-icons">favorite_border</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrinkCard;
