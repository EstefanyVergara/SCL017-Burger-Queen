import React from "react";
import {Nav} from "./Nav";
import Mesas from './mesas'
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";

export const Menu = ({mesero, setMesa, mesa}) => {
  return (
    <div className="menuContainer">
      <Ordersummary mesero={mesero} mesa={mesa}/>
      <Nav/>
      <Mesas setMesa={setMesa} />
    </div>
  );
};

export default Menu;
