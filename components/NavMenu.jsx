import React from "react";
import '../components/css/nav.css'
import { useState } from 'react';
import data from "./data/menu.json"


const NavMenu = () => {


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
    <button className="" type="button" onClick={() => {

    }}>
      <img src={product.img} className="card-img-top" alt="..." />{" "}
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

export {
  NavMenu };



//   <div className="navigation">
//   <ul className="navList">
//     <li className= 'btn-active'>
//     <Link to="/breakfast">
//         <img className='navIcon'
//           src={"https://imgur.com/1lZln5a.png"}
//           alt='coffe'
//         />
       
//       </Link>
//     </li>

//     <li >
//     <Link className ="btn" to="/burgir">
//         <img className='navIcon'
//           src={"https://imgur.com/v6EZtbD.png"}
//           alt='burger'
//         />
//       </Link>
//     </li>

//     <li>
//     <Link className ="btn-active" to="/extras">
//         <img className='navIcon'
//           src={"https://imgur.com/yadMCBx.png"}
//           alt='friesCoke'
//         />
//       </Link>
//     </li>
//     </ul>
// </div>