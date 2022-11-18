import { createContext, useState, useEffect } from "react";

// helper method
function addCartItem(cartItems, product) {
  // check if cartItems contains items
  const existItem = cartItems.find((item) => item.id === product.id);

  // if not, add to cart
  if (existItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  // return new cartItems
  return [...cartItems, { ...product, quantity: 1 }];
}

function removeItem(cartItems, itemToRemove) {
  const existItem = cartItems.find((item) => item.id === itemToRemove.id);

  if (existItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}

const clearItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};

// helper method for favorite list
const addFavorite = (likeList, itemToList, type) => {
  const existItem = likeList.find((item) => item.id === itemToList.id);

  if (existItem) {
    return likeList.filter((item) => item.id !== itemToList.id);
  }

  return [...likeList, { ...itemToList, category: type }];
};

export const context = createContext({
  cartItems: [],
  addItemToCart: () => {},
  totalPrice: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  likeList: [],
  addItemToList: () => {},
});

export const Provider = ({ children }) => {
  // cart items
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove));
  };

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearItem(cartItems, itemToClear));
  };

  const addItemToList = (favoriteItem, category) => {
    setLikeList(addFavorite(likeList, favoriteItem, category));
  };

  const value = {
    cartItems,
    addItemToCart,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
    likeList,
    addItemToList,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
