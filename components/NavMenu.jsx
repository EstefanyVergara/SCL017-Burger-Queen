import React from "react";
import "../components/css/nav.css";
import data from "./data/menu.json";

export default function NavMenu(props) {
  const { onAdd, mesa, setDataActual, dataActual } = props;

  
  const dataBreakfast = data.breakfast;

  const showBurgir = () => {
    if (mesa.length > 0) {
      setDataActual(data.burgir);
    } else {
      alert("Debe ingresar número de mesa");
    }
  };

  const showBreakfast = () => {
    if (mesa.length > 0) {
      setDataActual(dataBreakfast);
    } else {
      alert("Debe ingresar número de mesa");
    }
  };

  const showExtras = () => {
    if (mesa.length > 0) {
      setDataActual(data.extras);
    } else {
      alert("Debe ingresar número de mesa");
    }
  };

  return (
    <div className="navigation">
      <div className="navList">
        <button onClick={showBreakfast} className="btnMenu">
          <img
            className="navIcon"
            src={"https://imgur.com/1lZln5a.png"}
            alt="coffe"
          />
        </button>
        <button onClick={showBurgir} className="btnMenu">
          <img
            className="navIcon"
            src={"https://imgur.com/v6EZtbD.png"}
            alt="coffe"
          />
        </button>
        <button onClick={showExtras} className="btnMenu">
          <img
            className="navIcon"
            src={"https://imgur.com/yadMCBx.png"}
            alt="coffe"
          />
        </button>
      </div>
      <div className="Menu">
        {dataActual.map((product) => (
          <div key={product.id} className="cardMenu ">
            <button onClick={() => onAdd(product)}>
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
  