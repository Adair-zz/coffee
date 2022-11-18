import BEANS_DATA from "../../beans-data.json";

import BeanCart from "../../components/bean-card/bean-cart.component";

import "./beans.style.css";

function CoffeeBeans() {
  return (
    <div className="beans-container">
      <h1>Coffee Beans</h1>
      <div className="beans-card-body-container">
        {BEANS_DATA.map((bean) => (
          <BeanCart bean={bean} key={bean.id} />
        ))}
      </div>
    </div>
  );
}

export default CoffeeBeans;
