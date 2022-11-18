import "./cart-dropdown.style.css";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { context } from "../../AppContext";

function CartDropDown() {
  const { cartItems } = useContext(context);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container">
        {cartItems.length ? (
          cartItems.map((item) => {
            return (
              <div key={item.id} className="cart-body">
                <img src={item.imageUrl} alt={`${item.name}`} />
                <div className="item-detail">
                  <span className="cart-dropdown-name">{item.name}</span>
                  <span className="cart-dropdown-price">
                    ${item.price} x {item.quantity}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>
      <button className="btn-small" onClick={() => navigate("/checkout")}>
        CHECKOUT
      </button>
    </div>
  );
}

export default CartDropDown;
