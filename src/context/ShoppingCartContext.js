import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

// create context
const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.find((el) => el.id === product.id)) {
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    toast.success("Uspesno ste dodali artikal u korpu!");
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      if (prevItems.find((el) => el.id === id).quantity === 1) {
        removeFromCart(id);
      }
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    // the Provider gives access to the context to its children
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };

// crypto aplikacija, ime po izboru
// boje koje hocemo, perfekcija da izgleda
// navigaicja sticky,
// prva strana, lista svih coina po karticama, trebaju detalji na svaki coin,

// drugi tab exchanges,

// peta about stranica
// team member kartica na about, stavlja se samo github

// favourite coins za coins
// axios instance
