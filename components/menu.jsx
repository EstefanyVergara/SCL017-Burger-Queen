import React from "react";
import NavMenu from "./NavMenu";
import Mesas from "./Mesas";
import Ordersummary from "./OrderSummary";
import "../components/css/menu.css";
import data from "./data/menu.json";
import { useState } from "react";

function Menu({ mesero, setMesa, mesa }) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const removeItems = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const [dataActual, setDataActual] = useState(data.startMenu);

  const resetOrder = () => {
    setCartItems([]);
    setMesa("");
    setDataActual(data.startMenu);
  };

  return (
    <div className="menuContainer">
      <Ordersummary
        onAdd={onAdd}
        onRemove={onRemove}
        removeItems={removeItems}
        setCartItems={setCartItems}
        cartItems={cartItems}
        mesero={mesero}
        mesa={mesa}
        resetOrder={resetOrder}
      />
      <NavMenu
        onAdd={onAdd}
        products={products}
        mesa={mesa}
        dataActual={dataActual}
        setDataActual={setDataActual}
      />
      <Mesas setMesa={setMesa} mesa={mesa} />
    </div>
  );
}

export default Menu;
