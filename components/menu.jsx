import React from "react";
import {Nav} from "./Nav";
import Mesas from './mesas'
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";

export const Menu = () => {
  return (
    <div className="menuContainer">
      <Ordersummary />
      <Nav/>
      <Mesas/>
    </div>
  );
};

export default Menu;
