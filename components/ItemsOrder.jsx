import react from "react";

export default function ItemsOrder(props) {
  const {cartItems, onAdd,onRemove} = props;

  return (
    <>
  <div className="orderContainer">
 {cartItems.length === 0 && <h5 className = "textAdd">Agrega productos al resumen del pedido </h5>}</div>
  {cartItems.map((item) => (
<div key={item.id} className="row">
  <div>{item.name} </div>
  <div>
    <button onClick={()=>onAdd(item)} className="add">+</button>
    <button onClick={()=>onRemove(item)} className="remove">-</button>
  </div>
    <div>
    {item.qty} x ${item.price}

    </div>


</div>

  ))}

  </>
  );
}
