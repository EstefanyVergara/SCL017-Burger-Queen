import Ordersummary from "./orderSummary";
import "../components/menu.css";
import {NavBreakfast} from "./Nav";
import data from './data/menu.json'


export const Breakfast = () => {

    const dataBreakfast = data.breakfast
    
    

  return (
    <div className="menuContainer">
      <Ordersummary />
      <NavBreakfast/>
      <div className="nameMenu">
        <img src={"https://i.imgur.com/1lZln5a.png"} className="breakfastIcon" alt="..."/>
        <h1 className="titleBreakfast" > DESAYUNOS </h1>
      </div>
      <div className="Menu">
        {dataBreakfast.map((product) => (
          <div key={product.id} className="cardMenu ">
            <img src={product.img} className="card-img-top" alt="..."/>
            <div className ="card-body">
              <h5 className ="card-title">{product.name}</h5>
              <p className ="card-price">${product.price}</p>
            </div>
        </div>
        ))
        }


        

      </div>

    </div>
  )
}
