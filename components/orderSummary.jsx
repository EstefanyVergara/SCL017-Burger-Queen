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
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h2 className="textWaiterTable"> MESERO:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesero}</h3> </h2>
        <h2 className="textWaiterTable">MESA:  <h3 className='textWaiterTable2'>&nbsp;&nbsp;{mesa} </h3> </h2>
    </div>
   <ItemsOrder onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} removeItems={removeItems} />
    <div className='btn-order'>
    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-light" onClick={()=>sendOrder()}> ENVIAR </button>

             {/* Modal para confirmar pedido  */} 
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">¿ Confirma el pedido ?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            <button type="button" class="btn-si" /* onClick={()=>savingDataFirebase()} */ >SI</button>
                            <button type="button" class="btn-no" data-bs-dismiss="modal" >NO</button>
                        </div>
                    </div>
                </div>
            </div>

    <button className="btn btn-dark" onClick={()=>removeAllItems()} > CANCELAR </button>
    </div>
    </div>
);
};

export default Ordersummary;
