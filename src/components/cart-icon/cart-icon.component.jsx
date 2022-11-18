import "./cart-icon.style.css";
function CartIcon({ ClickEvent }) {
  return (
    <div className="cart-icon-container" onClick={ClickEvent}>
      <i className="material-icons cart-icon">shopping_cart</i>
    </div>
  );
}

export default CartIcon;
