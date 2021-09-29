import React from "react";
import Ordersummary from "./orderSummary";
import "../components/css/menu.css";
import { NavExtras } from "./Nav";
import data from "./data/menu.json";

const Extras = ({mesero, mesa, order, setOrder}) => {
  const dataExtras = data.extras;
  const dataDrinks = data.drinks;

  return (
    <div className="menuContainer">
      <Ordersummary mesero={mesero} mesa={mesa} order={order} setOrder={setOrder} />
      <NavExtras />
      <div className="nameMenu">
        <img
          src={"https://imgur.com/yadMCBx.png"}
          className="breakfastIcon"
          alt="..."
        />
        <h1 className="titleBreakfast"> EXTRAS </h1>
      </div>
      <div className="Menu">
        {dataExtras.map((product) => (
          <div key={product.id} className="cardMenu ">
            <button className="" type="button">
                <img src={product.img} className="card-img-top" alt="..." />{" "}
              </button>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-price">${product.price}</p>
            </div>
          </div>
        ))}
        <>
          {dataDrinks.map((product) => (
            <div key={product.id} className="cardMenu ">
              <button className="" type="button">
                <img src={product.img} className="card-img-top" alt="..." />{" "}
              </button>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">${product.price}</p>
                <button
                  className="btnBurgir btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <div className="checkbox">
                    <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value=""
                    />{" "}
                    {product.size[0]}
                  </div>
                </ul>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};
export default Extras;