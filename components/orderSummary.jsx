import "../components/css/orderSummary.css";
import ItemsOrder from "./ItemsOrder";

const Ordersummary = ({mesero, mesa, cartItems, onAdd, onRemove, removeItems}) => {

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
    <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal"> ENVIAR </button>
    <button className="btn btn-dark" > CANCELAR </button>
    </div>
    </div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">¿Confirmas el pedido?</h5>
      </div>
      <div class="modal-body">
      {cartItems.map((item) => (
<div key={item.id}>
  <div className='itemsModal'> {item.name}  | {item.qty} </div>
</div>
  ))}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">NO</button>
        <button type="button" class="btn btn-light">SI</button>
      </div>
    </div>
  </div>
</div>
    
    </>



);
};

export default Ordersummary;
