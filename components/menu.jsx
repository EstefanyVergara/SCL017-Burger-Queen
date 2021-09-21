import React from 'react'
import '../components/menu.css'
import Ordersummary from './orderSummary';

export const Menu = () => {
  return (  
    <div className = 'menuContainer'>
      <Ordersummary />
    </div>
  );
}

export default Menu;
