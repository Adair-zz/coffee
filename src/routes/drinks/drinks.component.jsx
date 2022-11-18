import DRINKS_DATA from "../../drinks-data.json";
import "./drinks.style.css";

import DrinkCard from "../../components/drink-card/drink-card.component";

function CoffeeDrinks() {
  return (
    <div className="drinks-container">
      <h1>Coffee Drinks</h1>
      <div className="drinks-card-body-container">
        {DRINKS_DATA.map((drink) => (
          <DrinkCard drink={drink} key={drink.id} />
        ))}
      </div>
    </div>
  );
}

export default CoffeeDrinks;
