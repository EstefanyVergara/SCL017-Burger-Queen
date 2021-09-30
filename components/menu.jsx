import React from "react";
import {NavMenu} from "./NavMenu";
import Mesas from './mesas'
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";

export const Menu = ({mesero, setMesa, mesa, data}) => {
  return (
    <div className="menuContainer">
      <Ordersummary mesero={mesero} mesa={mesa}/>
      <NavMenu data={data}/>
      <Mesas setMesa={setMesa} />
    </div>
  );
  
};

export default Menu;
