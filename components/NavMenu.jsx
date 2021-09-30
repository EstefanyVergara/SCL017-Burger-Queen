import React from "react";
import '../components/css/nav.css'
import { useState } from 'react';
import data from "./data/menu.json"


export default function NavMenu (props){

  const {product, addItem} = props;
    
  
  const [dataActual, setDataActual] = useState(data.startMenu);

    const dataBreakfast = data.breakfast;
    const showBurgir = () => {
      setDataActual(data.burgir);
    };
  
    const showBreakfast = () => {
      setDataActual(dataBreakfast);
    };

    const showExtras = () => {
      setDataActual(data.extras);
    };
    

  return (
   
    <div className="navigation">
    <div className="navList">
        <button  onClick={showBreakfast} className= "btnMenu">
        <img className='navIcon'
           src={"https://imgur.com/1lZln5a.png"}
           alt='coffe'/>
        </button>
        <button onClick={showBurgir} className= "btnMenu" >
        <img className='navIcon'
           src={"https://imgur.com/v6EZtbD.png"}
           alt='coffe'/>
        </button>
        <button  onClick ={showExtras} className= "btnMenu" >
        <img className='navIcon'
           src={"https://imgur.com/yadMCBx.png"}
           alt='coffe'/>
        </button>
    </div>

    <div className="Menu">
{dataActual.map((product) => (
  <div key={product.id} className="cardMenu ">
    <button onClick={() => addItem()}>
      <img src={product.img} className="card-img-top" alt="..." />
    </button>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-price">${product.price}</p>
    </div>
  </div>
))}
</div>
    </div>
  );
}



