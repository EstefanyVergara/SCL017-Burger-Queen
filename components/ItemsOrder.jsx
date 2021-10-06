import React from "react";

export default function ItemsOrder(props) {
  const {cartItems, onAdd, onRemove, removeItems} = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  
  return (
    <>
  <div className="orderContainer">
    <div>
 {cartItems.length === 0 && <h5 className = "textAdd">Agrega productos al resumen del pedido </h5>}</div>
 <div className='orderList'>
 <>
    {cartItems.length >= 1 &&
        <div className='titleOrderItems'> 
          <div className='tittleitems'>ITEM</div>
          <div className='tittleitems'>CANTIDAD</div>
          <div className='tittleitems'>PRECIO</div>
        </div>
  }</>
  {cartItems.map((item) => (
<div key={item.id} className="selectItemOrder">
  <div className='nameItem'>{item.name} </div>
  <div className='qtyOrder'>
    <button onClick={()=>onAdd(item)} className="btnAR add"> + </button>
    <div className='textQuantity'> {item.qty} </div>
    <button onClick={()=>onRemove(item)} className="btnAR remove"> - </button>
  </div>
    <div className='quantyPriceItem'>
    ${item.price}
    </div>
    <button  onClick={()=>removeItems(item)} className= "btnRemoveItem">
        <img className='TrashIcon'
          src={"https://imgur.com/BBuJ0lm.png"}
          alt='trash'/>
    </button>
</div>

  ))}
  </div>
  <div className='containerTotalBill'>
  {cartItems.length !== 0 && (
    <>
    <div className='rowPrice'>
      <div className='textBill'> <b className='textTotalOrder'> Total cuenta </b> </div>
      <div className='textBill text-right'><b>$ {itemsPrice} </b></div>
    </div>
    </>
  )}
  </div>
</div>
  </>
  );
}
