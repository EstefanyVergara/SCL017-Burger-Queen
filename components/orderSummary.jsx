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


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">¿Confirmas el pedido?</h5>
      </div>
      <div className="modal-body">
      {cartItems.map((item) => (
<div key={item.id}>
  <div className='itemsModal'> {item.name}  | {item.qty} </div>
</div>
  ))}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">NO</button>
        <button type="button" className="btn btn-light"data-bs-toggle="modal" data-bs-target="#exampleModal">SI</button>
      </div>
    </div>
  </div>
</div>
    
</>



);
};

export default Ordersummary;
