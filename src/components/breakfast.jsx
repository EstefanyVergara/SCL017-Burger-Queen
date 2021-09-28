import Ordersummary from "./orderSummary";
import "../components/menu.css";
import { NavBreakfast } from "./Nav";


const Breakfast = ({dataBreakfast, mesero, mesa}) => {

  return (
    <div className="menuContainer">
      <Ordersummary mesero={mesero} mesa={mesa}/>
      <NavBreakfast />
      <div className="nameMenu">
        <img
          src={"https://i.imgur.com/1lZln5a.png"}
          className="breakfastIcon"
          alt="..."
        />
        <h1 className="titleBreakfast"> DESAYUNOS </h1>
      </div>
      <div className="Menu">

        {dataBreakfast.map((product) => (
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
};
export default Breakfast;