import "../components/css/orderSummary.css";
import ItemsOrder from "./ItemsOrder";

const Ordersummary = ({mesero, mesa, cartItems, onAdd, onRemove, removeItems}) => {

return (
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h2 className="textWaiterTable"> MESERO:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesero}</h3> </h2>
        <h2 className="textWaiterTable">MESA:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesa} </h3> </h2>
    </div>
   <ItemsOrder onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} removeItems={removeItems} />
    <div className='btn-order'>
    <button className="btn btn-light" > ENVIAR </button>
    <button className="btn btn-dark" > CANCELAR </button>
    </div>
    </div>
);
};

export default Ordersummary;
