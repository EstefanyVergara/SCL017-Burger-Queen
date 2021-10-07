import "../components/css/orderSummary.css";
import "../components/css/modalConfirm.css";
import ItemsOrder from "./ItemsOrder";
import { savingDataFirebase } from "../firebase";

const Ordersummary = ({
  mesero,
  mesa,
  cartItems,
  onAdd,
  onRemove,
  removeItems,
  setCartItems,
  resetOrder,
}) => {
  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="summaryContainer">
        <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
        <div className="tableNumContainer">
          <h3 className="textWaiterTable">MESERO: &nbsp;&nbsp;{mesero}</h3>
          <h3 className="textWaiterTable">MESA: &nbsp;&nbsp;{mesa}</h3>
        </div>
        <ItemsOrder
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove}
          removeItems={removeItems}
        />
        <div className="btn-order">
          <button className="btn btn-dark" onClick={() => removeAllItems()}>
            CANCELAR
          </button>
          <a
            className="btn btn-light"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            ENVIAR
          </a>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                ¿Confirmas el pedido?
              </h5>
            </div>
            <div className="modal-body">
              <div className="titleConfirm">
                <div> Cantidad </div>
                <div className="itemTextConfirm"> Item </div>
              </div>
              <div className="containerLisItem">
                {cartItems.map((item) => (
                  <div key={item.id} className="ListItemConfirm">
                    <div className="textQuantityConfirm"> {item.qty} </div>
                    <div className="nameItemConfirm">{item.name} </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
              >
                NO
              </button>
              <button
                className="btn btn-light"
                data-bs-target="#exampleModalToggle2"
                onClick={() => savingDataFirebase(cartItems, mesero, mesa)}
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                SI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de enviado a cocina  */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => resetOrder()}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="titleModal2">SOLICITUD ENVIADA A COCINA</p>
              <center>             
                <img src={"https://imgur.com/qDmiCm1.png"} alt="OK"/>
              </center>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordersummary;
