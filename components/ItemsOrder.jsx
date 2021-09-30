import React from "react";

export default function ItemsOrder(props) {
  const {cartItems, onAdd, onRemove, removeItems} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const itemsPriceNeto = itemsPrice/1.19;
  const taxPrice = itemsPriceNeto*0.19;
  const suggestedTip = itemsPrice*0.10;
  const itemsPriceTotal = (itemsPrice+suggestedTip)


  return (
    <>
  <div className="orderContainer">
    <div>
 {cartItems.length === 0 && <h5 className = "textAdd">Agrega productos al resumen del pedido </h5>}</div>
 <div>
    {cartItems.length >= 1 &&
        <div className='titleOrderItems'> 
          <div className='tittleitems'>Item</div>
          <div className='tittleitems'>Cantidad</div>
          <div className='tittleitems'> Precio </div>
        </div>
  }</div>
  {cartItems.map((item) => (
<div key={item.id} className="selectItemOrder">
  <div className='nameItem'>{item.name} </div>
  <div className='qtyOrder'>
    <button onClick={()=>onAdd(item)} className="add">+</button>
    <div> {item.qty} </div>
    <button onClick={()=>onRemove(item)} className="remove">-</button>
  </div>
    <div className='quantyPriceItem'>
    {item.qty} x ${item.price}
    </div>
    <button  onClick={()=>removeItems(item)} className= "btnRemoveAll">
        <img className='TrashIcon'
           src={"https://imgur.com/BBuJ0lm.png"}
           alt='trash'/>
    </button>
</div>

  ))}
  {cartItems.length !== 0 && (
    <>
    <hr></hr>
    <div className='rowPrice'>
      <div className='col-2'> Total neto </div>
      <div className='col-1 text-right'>$ {itemsPriceNeto.toFixed(0)} </div>
    </div>
    <div className='rowPrice'>
      <div className='col-2'> IVA </div>
      <div className='col-1 text-right'>$ {taxPrice.toFixed(0)} </div>
    </div>
    <div className='rowPrice'>
      <div className='col-2'> <strong> Total cuenta </strong> </div>
      <div className='col-1 text-right'><strong>$ {itemsPrice} </strong></div>
    </div>
    <hr></hr>
    <div className='rowPrice'>
      <div className='col-2'> Propina sugerida </div>
      <div className='col-1 text-right'>$ {suggestedTip.toFixed(0)} </div>
    </div>
    <div className='rowPrice'>
      <div className='col-2'> Total + Propina </div>
      <div className='col-1 text-right'>$ {itemsPriceTotal.toFixed(0)} </div>
    </div>
    
    </>
  )}
</div>
  </>
  );
}
