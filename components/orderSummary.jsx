/* eslint-disable react/jsx-no-comment-textnodes */
import "../components/css/orderSummary.css";
import "../components/css/modalConfirm.css";
import ItemsOrder from "./ItemsOrder";

const Ordersummary = ({mesero, mesa, cartItems, onAdd, onRemove, removeItems, setCartItems}) => {
console.log(cartItems);
const removeAllItems = () => {
    setCartItems([]);
    }

const sendOrder = () => {
        
    }

return (
    <>
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h2 className="textWaiterTable"> MESERO:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesero}</h3> </h2>
        <h2 className="textWaiterTable">MESA:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesa} </h3> </h2>
    </div>
    <ItemsOrder onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} removeItems={removeItems} />
    <div className='btn-order'>
    <button className="btn btn-dark" onClick={()=>removeAllItems()} > CANCELAR </button>
    <a className="btn btn-light" data-bs-toggle="modal" href="#exampleModalToggle" role="button">ENVIAR</a>
    </div>
    </div>

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">¿Confirmas el pedido?</h5>
      </div>
      <div class="modal-body">
          <div className="titleConfirm">
              <div> Cantidad </div>
              <div className="itemTextConfirm"> Item </div>
          </div>
              
          {cartItems.map((item) => (
              <div key={item.id} className="ListItemConfirm">
                      <div className='textQuantityConfirm'> {item.qty} </div>
                      <div className='nameItemConfirm'>{item.name} </div>
              </div>
          ))}
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-dark" data-bs-dismiss="modal">NO</button>
        <button class="btn btn-light" data-bs-target="#exampleModalToggle2" /* onClick={()=>savingDataFirebase()} */ data-bs-toggle="modal" data-bs-dismiss="modal">SI</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>SOLICITUD ENVIADA A COCINA </h5>
      </div>
    </div>
  </div>
</div>

</>



);
};

export default Ordersummary;
