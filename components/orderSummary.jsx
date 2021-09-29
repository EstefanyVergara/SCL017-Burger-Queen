import "../components/css/orderSummary.css";

const Ordersummary = ({mesero, mesa}) => {

return (
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h3 className="text3"> MESERO: {mesero} </h3>
        <h2 className="text2"> N° DE MESA: {mesa} </h2>
    </div>
    <div className="orderContainer"></div>
    <div className='btn-order'>
    <button className="btn btn-light" > ENVIAR </button>
    <button className="btn btn-dark" > CANCELAR </button>
    </div>
    </div>
);
};

export default Ordersummary;
