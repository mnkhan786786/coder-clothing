import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";
import ProductView from "./routes/ProductView";

import "./App.css";

export const AppContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const products = [
    {
      name: "T-Shirt",
      price: 3000,
      category: "tops",
      description: "Classic original white shirt.",
    },
    {
      name: "T-Shirt2",
      price: 5000,
      category: "tops",
      description: "Classic original pink shirt.",
    },

    {
      name: "T-Shirt3",
      price: 2500,
      category: "tops",
      description: "Classic original red shirt.",
    },
    {
      name: "Jeans",
      price: 3000,
      category: "bottoms",
      description: "Double classic western blue jeans.",
    },

    {
      name: "Sweatpants",
      price: 5000,
      category: "bottoms",
      description: "Standard cinched pant leg sweatpants.",
    },

    {
      name: "Shorts",
      price: 2000,
      category: "bottoms",
      description: "Hall of fame Jordan 1 inch seam basketball shorts.",
    },

    {
      name: "Zip-Hoodie",
      price: 4000,
      category: "outerwear",
      description: "Classic heather gray zip up hoodie.",
    },

    {
      name: "Jacket",
      price: 9000,
      category: "outerwear",
      description: "UK style puffer fish jacket.",
    },
    {
      name: "Hoodie",
      price: 2000,
      category: "outerwear",
      description: "Circa '06 standard gray hoodie (colorized).",
    },
  ];

  const addToCart = (cartItem) => {
    setCart((prevState) => [...prevState, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prevState) =>
      prevState.filter((cartItem) => cartItem.id !== cartItemId)
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const filteredAndSortedProducts = sort
    ? filteredProducts.sort((a, b) =>
        sort === "ASC" ? a.price - b.price : b.price - a.price
      )
    : filteredProducts;

  return (
    <AppContext.Provider
      value={{
        products: filteredAndSortedProducts,
        cart,
        addToCart,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        sort,
        setSort,
      }}
    >
      <BrowserRouter>
        <Header cartCount={cart.length} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/shop/tops" />
          </Route>
          <Route exact path="/shop/:category" component={Shop} />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:name" component={ProductView} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
