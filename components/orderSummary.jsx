import "../components/orderSummary.css";

const Ordersummary = ({mesero, mesa}) => {
   

return (
    <div className="summaryContainer">
    <h1 className="textResume"> RESUMEN DEL PEDIDO </h1>
    <div className="tableNumContainer">
        <h3 className="text3"> Mesero: {mesero} </h3>
        <h2 className="text2"> N° DE MESA: {mesa} </h2>
    </div>
    <div className="orderContainer"></div>
    <button className="btn-light" > ENVIAR </button>
    </div>
);
};

export default Ordersummary;
