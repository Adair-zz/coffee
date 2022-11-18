import "./checkout.style.css";

import { useContext } from "react";
import { context } from "../../AppContext";

function Checkout() {
  const { cartItems, totalPrice } = useContext(context);
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(context);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-col">Product</span>
        <span className="header-col">Name</span>
        <span className="header-col">Quantity</span>
        <span className="header-col">Price</span>
        <span className="header-col">Delete</span>
      </div>

      {cartItems.map((item) => {
        const { id, name, price, quantity, imageUrl } = item;
        return (
          <div key={id} className="checkout-body">
            <div className="image-container">
              <img src={imageUrl} alt={name} />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
              <div
                className="checkout-arrow"
                onClick={() => removeItemFromCart(item)}
              >
                <i className="material-icons">navigate_before</i>
              </div>
              <span className="quantity">{quantity}</span>
              <div
                className="checkout-arrow"
                onClick={() => addItemToCart(item)}
              >
                <i className="material-icons">navigate_next</i>
              </div>
            </span>
            <span className="price">{price}</span>
            <div
              className="remove-item"
              onClick={() => clearItemFromCart(item)}
            >
              <i className="material-icons">remove_shopping_cart</i>
            </div>
          </div>
        );
      })}
      <div className="total-price">TOTAL: ${totalPrice}</div>
    </div>
  );
}

export default Checkout;
