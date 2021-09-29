import "../components/css/orderSummary.css";

const Ordersummary = ({mesero, mesa, order }) => {

return (
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h3 className="text3"> MESERO: {mesero} </h3>
        <h2 className="text2"> N° DE MESA: {mesa} </h2>
    </div>
    <div className="orderContainer">
        <div className='titleProducSelect'>
            <h2> Item </h2>
            <h2> Precio</h2>

        </div>
    {order.map((product) => (
        <div className='productSelect'>
        <h4> {product.nombre} </h4>
        <h4> {product.typeBurgir} </h4>
        <h4> $ {product.precio} </h4>
        </div>
    ))}
    </div>
    <div className='btn-order'>
    <button className="btn btn-light" > ENVIAR </button>
    <button className="btn btn-dark" > CANCELAR </button>
    </div>
    </div>
);
};

export default Ordersummary;
