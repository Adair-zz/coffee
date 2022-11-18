import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CoffeeLogo } from "../../assets/logo.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import FavoriteIcon from "../../components/favorite-icon/favorite-icon.component";
import Footer from "../../components/footer/footer.component";
import "./navigation.style.css";

function Navigation() {
  // control cart open and close
  const [iscartOpen, setIsCartOpen] = useState(false);
  const cartDropdownClickEvent = () => setIsCartOpen(!iscartOpen);

  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <div className="logo-svg">
            <CoffeeLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/beans">
            COFFEE BEANS
          </Link>
          <Link className="nav-link" to="/drinks">
            COFFEE DRINKS
          </Link>
          <Link className="nav-link" to="/drinks">
            SIGN IN
          </Link>
          <CartIcon ClickEvent={() => cartDropdownClickEvent()} />
          <Link to="/favorite">
            <FavoriteIcon />
          </Link>
        </div>
        {iscartOpen && <CartDropDown />}
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Navigation;
