import React from 'react'

export default function itemsOrder (props){
  const {order, addItem, onDeleted} = props;
  
  return (
    <>
      <div className="orderContainer">
        {order.length === 0 && <h5 className = "textAdd">Agrega productos al resumen del pedido </h5>}</div>
      {order.map((item) =>(
      <div key={item.id}className="row">
        <div className ="col-2">{item.name}</div>
        <div className ="col-2">
        <button onClick={() => addItem(item)} className="add">
          +
        </button>
        <button onClick={() => onDeleted(item)} className="remove">
          -
        </button>
        </div>
        <div className="col-2 text-right">
          {item.qty} x${item.price}

        </div>

      </div>


      )
      )}
    </>
  )
};


