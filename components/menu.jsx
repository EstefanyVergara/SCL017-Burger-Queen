import React from "react";
import Nav from "./Nav";
import Ordersummary from "./orderSummary";
import "../components/menu.css";

export const Menu = () => {
  return (
    <div className="menuContainer">
      <Ordersummary />
      <Nav/>
    </div>
  );
};

export default Menu;
