import "./favorite.style.css";
import { useContext } from "react";
import { context } from "../../AppContext";

function Favorite() {
  const { likeList } = useContext(context);

  return (
    <div className="favorite-container">
      <div className="checkout-header">
        <span className="header-col">Likes</span>
        <span className="header-col">Name</span>
        <span className="header-col">Category</span>
        <span className="header-col">Delete</span>
        <span className="header-col"></span>
      </div>

      {likeList.map((item) => {
        return <div key={item.id}>{item.id}</div>;
      })}
    </div>
  );
}

export default Favorite;
