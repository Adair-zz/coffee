import { useNavigate } from "react-router-dom";

import "./directory.style.css";

import homeImg from "../../assets/home-img.jpg";

function Directory() {
  const navigate = useNavigate();
  return (
    <div className="directory-container">
      <div className="coffee-beans-container">
        <h3
          onClick={() => {
            navigate("/beans");
          }}
        >
          Coffee Beans
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          reprehenderit odio maiores vel ab obcaecati, debitis aut aliquid
          consectetur sapiente delectus rerum ipsa officia adipisci non eos
          atque rem nemo.
        </p>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="home-img" />
      </div>
      <div className="coffee-drinks-container">
        <h3
          onClick={() => {
            navigate("/drinks");
          }}
        >
          Coffee Drinks
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          alias culpa repudiandae veritatis impedit fuga cupiditate, ipsa unde
          necessitatibus atque possimus tempora assumenda praesentium officia,
          qui sapiente? Nam, obcaecati nisi!
        </p>
      </div>
    </div>
  );
}

export default Directory;
