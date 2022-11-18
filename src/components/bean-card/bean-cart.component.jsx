import { useContext } from "react";
import { context } from "../../AppContext";

import "./bean-card.style.css";

function BeanCart({ bean }) {
  const { name, description, imageUrl } = bean;

  const { addItemToCart } = useContext(context);

  return (
    <div className="beans-card-container">
      <div className="beans-image-container">
        <img src={imageUrl} className="beans-image" alt={name} />
      </div>
      <div className="beans-info">
        <h3 className="beans-name">{name}</h3>
        <p className="beans-description">{description}</p>
        <div className="bean-button-container">
          <button
            className="waves-effect waves-light btn-large"
            onClick={() => addItemToCart(bean)}
          >
            Add To Cart
            <i className="large material-icons shopping-cart right">
              add_shopping_cart
            </i>
          </button>
          <button className="waves-effect waves-light btn-large">
            <i className="large material-icons">favorite_border</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeanCart;
