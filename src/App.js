//import logo from "./logo.svg";
//import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CoffeeBeans from "./routes/beans/beans.component";
import CoffeeDrinks from "./routes/drinks/drinks.component";
import Checkout from "./routes/checkout/checkout.component";
import Favorite from "./routes/favorite/favorite.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="beans" element={<CoffeeBeans />} />
        <Route path="drinks" element={<CoffeeDrinks />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
